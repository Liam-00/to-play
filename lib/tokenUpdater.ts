import cron from 'node-cron'
import { updateToken, getTokenFromFile } from './igdbTwitchTokenValidation'

console.log("...setting cron...")

cron.schedule('0 * * * *', async () => {
    console.log("//Updating Twitch IGDB Token ...")
    
    try {
        let token = await getTokenFromFile()
        await updateToken(token)
    
    } catch (e) {
        console.error(e)
    
    }
    
    console.log("//...Updated Twitch IGDB Token")

})