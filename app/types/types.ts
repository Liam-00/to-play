import { type } from "os"

type AppGameType = {
    title: string,
    igdbid: number,
    cover: string,
    releasedate: number,
    publisher: string[],
    developer: string[],
    genres: string[],
    description: string,
    storyline: string
}

type IgdbGameResponseType = {
    id: number,
    cover?: {
        id: number,
        image_id: string
    },
    first_release_date?: number,
    genres?: {
        id: number,
        name: string
    }[],
    involved_companies?: {
        id: number,
        company: {
            id: number,
            name: string
        },
        publisher: boolean,
        developer: boolean
    }[],
    name: string,
    summary?: string,
    storyline?: string
}   

export type {AppGameType, IgdbGameResponseType}