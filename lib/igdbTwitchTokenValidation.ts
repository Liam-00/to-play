import fs from 'fs/promises'
import type twitchToken from '@/app/types/twitchtoken_type'
import 'dotenv/config'

//path to token file, is constant
const filePath = "./data/twitchAccessToken.json"


const validateToken = async (token: twitchToken): Promise<boolean> => {
    let url = `https://id.twitch.tv/oauth2/validate`
    let resp:Response = await fetch(
        url,
        {
            headers: {
                "Authorization": `OAuth ${token.access_token}`
            }
        }
    )
    
    if (resp.status === 200) {
        return true
    
    } else if (resp.status === 401) {
        return false
    
    } else {
        throw new Error("--Failed to authenticate IGDB access token.--")
    
    }

}

const getTokenFromFile = async (path: string = filePath): Promise<twitchToken> => {
    let file_data:string = await fs.readFile(path, {encoding: "utf-8"})
    
    let token_object = JSON.parse(file_data)
    
    return token_object

}

const writeTokenToFile = async (token: twitchToken, path: string = filePath) => {    
    await fs.writeFile(path, JSON.stringify(token))

}

const createNewToken = async () => {
    let url = ``
        +`https://id.twitch.tv/oauth2/token?`
        +`client_id=${process.env.TWITCH_ID}&`
        +`client_secret=${process.env.TWITCH_SECRET}&`
        +`grant_type=client_credentials`
    
        let resp: Response = await fetch(url, {method: "POST"})
       
        if (resp.status > 200 || resp.status > 299) {
            throw new Error("--Failed request for new IGDB token.--")
        }

        let res_object = await resp.json()
        
        let token_new: twitchToken = {
            access_token: res_object.access_token,
            expires_in: res_object.expires_in,
            token_type: res_object.token_type,
            valid: true,
            last_checked: Date.now()
        }

        try{
            await writeTokenToFile(token_new)
        
        } catch(e: any) {
            throw new Error("--Failed to write IGDB token to file.--", {cause: e.cause})
        
        }

    }

const updateToken = async (twitchToken: twitchToken) => {
    
    let token: twitchToken = {...twitchToken}
    
    token.valid = await validateToken(token)
    token.last_checked = Date.now()

    if (!token.valid) {
        await createNewToken()
    }

}

export {createNewToken, updateToken, getTokenFromFile}
