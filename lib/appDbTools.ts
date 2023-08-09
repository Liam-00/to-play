import type { GameType, ListGameType, GameListType, IgdbGameType } from "@/app/types/types"
import type { Game, GameList, ListGame, Status } from "@prisma/client"

import { getIgdbGame } from "./igdbApiTools"
import { prisma } from "./prisma_client"
import App from "next/app"

type idModeType = 'IGDB' | 'DB'

/*
====GAME====
Functions that retrieve data return the data or null. Others return true on completion or throw an error.
*/

//create
export const addGameToDb = async (igdbGameId: number): Promise<boolean> => {
    const igdbGameData_object: IgdbGameType = await getIgdbGame(igdbGameId)

    const dbGameQueryResponse: Game | null = await readGameFromDb(igdbGameId, 'IGDB')

    try {
        if (!dbGameQueryResponse) {    
            await prisma.game.create({
                data: {
                    igdbid: igdbGameData_object.igdbid,
                    title: igdbGameData_object.title,
                    releasedate: igdbGameData_object.releasedate,
                    publisher: igdbGameData_object.publisher,
                    developer: igdbGameData_object.developer,
                    genres: igdbGameData_object.genres,
                    description: igdbGameData_object.description ?? "",
                    cover: igdbGameData_object.cover ?? ""
                }
            })
 
        } else {
            try {
                await updateGameInDb(igdbGameId)
            } catch {
                console.error("Failed to update Game, but a version of the same entry with possibly older data exists")
            }
        
        }
    
        return true
    
    } catch (e) {
        throw new Error("Could not add Game to database")
    
    }

}

//read
export const readGameFromDb = async (id: number | string, mode: idModeType): Promise<GameType | null> => {
    
    let dbGameQueryResponse: Game | null = null
    
    if (mode === 'IGDB') {
        dbGameQueryResponse = await prisma.game.findUnique({
            where: {
                igdbid: id as number,
            },
        })
            
    } else {
        dbGameQueryResponse = await prisma.game.findUnique({
            where: {
                id: id as string,
            },
        })
        
    }

    let game: GameType | null = null

    if (dbGameQueryResponse) {
        game = {
            id: dbGameQueryResponse.id,
            title: dbGameQueryResponse.title,
            igdbid: dbGameQueryResponse.igdbid,
            cover: dbGameQueryResponse.cover ?? null,
            releasedate: dbGameQueryResponse.releasedate ?? null,
            publisher: [...dbGameQueryResponse.publisher],
            developer: [...dbGameQueryResponse.developer],
            genres: [...dbGameQueryResponse.genres],
            description: dbGameQueryResponse.description ?? null,
            storyline: null
        }
    
    }

    return game    
}

//update
export const updateGameInDb = async (igdbId: number): Promise<boolean> => {
    try {
        const igdbGameData: IgdbGameType = await getIgdbGame(igdbId)
        
        await prisma.game.update({
            where: {
                igdbid: igdbId,
            },
            data: {
                title: igdbGameData.title,
                releasedate: igdbGameData.releasedate,
                publisher: igdbGameData.publisher,
                developer: igdbGameData.developer,
                genres: igdbGameData.genres,
                description: igdbGameData.description,
                cover: igdbGameData.cover
            }
        })

        return true
    
    } catch (e) {
        throw new Error("Failed to update Game in databse")
    
    }

}


/*
====ListGame====
*/

//create
export const addListGameToDb = async (listId: string, gameId: string): Promise<boolean> => {
    
    //check that game exists in db
    let game: GameType | null = await readGameFromDb(gameId, 'DB')
    if (!game) throw new Error("Game does not exist in database")
    
    //check that list exists in db
    let gameList: GameListType | null = await readGameListFromDb(listId)
    if (!gameList) throw new Error("GameList does not exist in database")
    
    
    //check that listGame doesn't already exist
    let listGame_object = await readListGameFromDb(listId, gameId)
    if (listGame_object) throw new Error("ListGame already exists in database")
    

    //create listgame
    try {
        let newListGame_object = await prisma.listGame.create({
            data: {
                gameid: game.id,
                listid: gameList.id,
                status: 'NotStarted',
            }
        })

        return true
    
    } catch (e) {
        throw new Error("Failed to create ListGame")
    
    }

}

//read
export const readListGameFromDb = async (listId: string, gameId: string): Promise<ListGameType | null> => {

    let listGame

    try {
        listGame = await prisma.listGame.findUnique({
            where: {
                gameid_listid: {
                    gameid: gameId,
                    listid: listId
                }
            },
            include: {
                game: true
            }
        })
    } catch (e) {
        throw new Error("Failed to retieve ListGame")
    }

    let listGameResult: ListGameType | null = null

    if (!listGame) return listGameResult

    listGameResult = {
            id: listGame.game.id,
            title: listGame.game.title,
            igdbid: listGame.game.igdbid,
            cover: listGame.game.cover ?? null,
            releasedate: listGame.game.releasedate ?? null,
            publisher: [...listGame.game.publisher],
            developer: [...listGame.game.developer],
            genres: [...listGame.game.genres],
            description: listGame.game.description ?? null,
            storyline: null,
            status: listGame.status,
            dateadded: listGame.dateadded ?? null,
            datestarted: listGame.datestarted ?? null,
            datecompleted: listGame.datecompleted ?? null
    }    
    
    return listGameResult
   
}

//update
export const updateListGameInDb = async (listId:string, gameId:string, status: Status): Promise<boolean> => {
    
    //get object to update
    let listGame = await readListGameFromDb(listId, gameId)
    if (!listGame) throw new Error("ListGame does not exist")

    //update data
    switch (status) {
        case "Completed":
            listGame.datecompleted = new Date()
            break;
        case "InProgress":
            listGame.datestarted = new Date()
            listGame.datecompleted = null
            break;
        case "NotStarted":
            //listGame_object.dateadded = new Date()
            listGame.datestarted = null
            listGame.datecompleted = null

        break;
    }

    listGame.status = status

    try {
        //update object in db with new data
        let listGame_object_updated = await prisma.listGame.update({
            where: {
                gameid_listid: {
                    gameid: gameId,
                    listid: listId
                }
            },
            data: {
                status: listGame.status as Status,
                datecompleted: listGame.datecompleted,
                datestarted: listGame.datestarted
            }
        })
    
    } catch (e) {
        throw new Error("Could not update ListGame in database")
    
    }

    return true

}

//delete
export const deleteListGameFromDb = async (listId:string, gameId:string) => {
    
    try {
        let deleted_listGame_object = await prisma.listGame.delete({
            where: {
                gameid_listid: {
                    gameid: gameId,
                    listid: listId
                }
            }
        })
    
    } catch (e) {
        throw new Error("Could not delete ListGame from database")
    
    }
    
    return true

}


//====List====
//create
export const addGameListToDb = async (userId: string, name: string): Promise<boolean> => {
    try {
        prisma.gameList.create({
            data: {
                name: name,
                users: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

        return true
    
    } catch (e) {
        throw new Error("Failed to create list in database")
    
    }

}

//read
export const readGameListFromDb = async (listId:string): Promise<GameListType | null> => {
    let igdbGameList = await prisma.gameList.findUnique({
        where: {
            id: listId
        },
        include: {
            games: {
                include: {
                    game: true
                }
            },
            users: true,
        }
    })

    if (!igdbGameList) throw new Error("Gamelist not found in database")

    console.log(JSON.stringify(igdbGameList, null, 2))

    let gamelist: ListGameType[] = igdbGameList.games.map(
        (listGame: any) => {
            return {
                id: listGame.game.id,
                status: listGame.status,
                dateadded: listGame.dateadded ?? null,
                datestarted: listGame.datestarted ?? null,
                datecompleted: listGame.datecompleted ?? null,
                title: listGame.game.title,
                igdbid: listGame.game.igdbid,
                cover: listGame.game.cover ?? null,
                releasedate: listGame.game.releasedate ?? null,
                publisher: [...listGame.game.publisher],
                developer: [...listGame.game.developer],
                genres: [...listGame.game.genres],
                description: listGame.game.description ?? null,
                storyline: listGame.game.storyline ?? null
            }
        }
    )


    return {
        id: igdbGameList.id,
        title: igdbGameList.name,
        games: gamelist
    }

}

//update
export const updateGameListInDb = async (listId: string, name: string): Promise<boolean> => {
    try {
        await prisma.gameList.update({
            where: {
                id: listId,
            },
            data: {
                name: name
            }
        })

        return true
    
    } catch(e) {
        throw new Error("Failed to update GameList in database")

    }

}

//delete
export const deleteGameListInDb = async (listId: string) => {
    try {
        await prisma.gameList.delete({
            where : {
                id: listId
            }
        })
    
    } catch(e) {
        throw new Error("Failed to delete GameList in database")

    }
}

//====User====

export const readUserFromDb = async (email:string) => {
    try {
        let user = prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                lists: true
            }
        })

        return user
    
    } catch (e) {
        throw new Error("Could not get user from database")
    
    }
}