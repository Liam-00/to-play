import { headers } from "next/dist/client/components/headers"
import { getTokenFromFile } from "./igdbTwitchTokenValidation"
import 'dotenv/config'
import type { AppGameType, IgdbGameResponseType } from "@/app/types/types"


const makeIgdbRequest = async (endpoint:string, request_body_string:string) => {
    let url = `https://api.igdb.com/v4/${endpoint}/`
    
    let token = await getTokenFromFile()
    
    let resp_game = await fetch(
        url,
        {
            method: `POST`,
            body: `${request_body_string}`,
            headers: {
                "Accept": `application/json`,
                "Client-ID": `${process.env.TWITCH_ID}`,
                "Authorization": `Bearer ${token.access_token}`,
                }
        }
    )
        
    if (resp_game.status > 200 || resp_game.status > 299) {
        throw new Error("--Unable to access IGDB--")
    }

    let igdbApiResponse_object = await resp_game.json()

    if (!igdbApiResponse_object[0]) {
        throw new Error("--Query returned nothing--")
    }
    
    return igdbApiResponse_object[0]
}

const buildIgdbCoverUrl = (coverId: string) => {
    let url = `https://images.igdb.com/igdb/image/upload/t_1080p/${coverId}.jpg`
    return url
}


const getIgdbGame = async (igdbId: number): Promise<AppGameType> => {
    let igdbApiResponse_object: IgdbGameResponseType = await makeIgdbRequest(
        `games`,
        `
        fields 
        involved_companies.developer, 
        involved_companies.publisher, 
        involved_companies.company.name,
        name,
        cover.image_id,
        genres.name,
        first_release_date,
        storyline,
        summary;
        where id = ${igdbId};
        `
    )
    
    let new_game_object: AppGameType = {
        igdbid: igdbApiResponse_object.id,
        title: igdbApiResponse_object.name,
        releasedate: igdbApiResponse_object.first_release_date ?? 0,
        cover: igdbApiResponse_object.cover?.image_id ? buildIgdbCoverUrl(igdbApiResponse_object.cover.image_id) : '', 
        publisher: [],
        developer: [],
        genres: [],
        description: igdbApiResponse_object.summary ?? '',
        storyline: igdbApiResponse_object.storyline ?? ''
    }
    
    //retrieve companies from response and populate field in new game object
    if (igdbApiResponse_object.involved_companies) {
        igdbApiResponse_object.involved_companies.forEach(company => {
            if (company.developer) {
                new_game_object.developer.push(company.company.name)
            }
            if (company.publisher) {
                new_game_object.publisher.push(company.company.name)
            }
        })
    }

    //retrieve genres from response and populate field in new game object
    if (igdbApiResponse_object.genres) {
        igdbApiResponse_object.genres.forEach(genre => {
            new_game_object.genres.push(genre.name)
        })
    }
    
    return new_game_object
    
}


export {getIgdbGame}
