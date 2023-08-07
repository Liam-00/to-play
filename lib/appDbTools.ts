import type { AppGameType } from "@/app/types/types"
import type { Game, GameList, ListGame, Status } from "@prisma/client";
import { getIgdbGame } from "./igdbApiTools"

import { prisma } from "./prisma_client";
import App from "next/app";

type idModeType = 'IGDB' | 'DB'

/*
====GAME====
Functions that retrieve data return the data or null. Others return true on completion or throw an error.
*/

//create
const addGameToDb = async (igdbGameId: number): Promise<boolean> => {
    const igdbGameData_object: AppGameType = await getIgdbGame(igdbGameId)

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
                    description: igdbGameData_object.description,
                    cover: igdbGameData_object.cover
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
const readGameFromDb = async (id: number | string, mode: idModeType): Promise<Game | null> => {
    
    let dbGameQueryResponse: Game | null
    
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

    return dbGameQueryResponse

    
}

//update
const updateGameInDb = async (igdbId: number): Promise<boolean> => {
    try {
        const igdbGameData_object: AppGameType = await getIgdbGame(igdbId)
        
        await prisma.game.update({
            where: {
                igdbid: igdbId,
            },
            data: {
                title: igdbGameData_object.title,
                releasedate: igdbGameData_object.releasedate,
                publisher: igdbGameData_object.publisher,
                developer: igdbGameData_object.developer,
                genres: igdbGameData_object.genres,
                description: igdbGameData_object.description,
                cover: igdbGameData_object.cover
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
const addListGameToDb = async (listId: string, gameId: string) => {
    
    //check that game exists in db
    let game_object: Game | null = await readGameFromDb(gameId, 'DB')
    if (!game_object) throw new Error("Game does not exist in database")
    
    //check that list exists in db
    let gameList_object: GameList | null = await readGameListFromDb(listId)
    if (!gameList_object) throw new Error("GameList does not exist in database")
    
    
    //check that listGame doesn't already exist
    let listGame_object = await readListGameFromDb(listId, gameId)
    if (listGame_object) throw new Error("ListGame already exists in database")
    

    //create listgame
    try {
        let newListGame_object = await prisma.listGame.create({
            data: {
                gameid: game_object.id,
                listid: gameList_object.id,
                status: 'NotStarted',
            }
        })

        return true
    
    } catch (e) {
        throw new Error("Failed to create ListGame")
    
    }

}

//read
const readListGameFromDb = async (listId: string, gameId: string): Promise<ListGame | null> => {

    try {
        let listGame_object = await prisma.listGame.findUnique({
            where: {
                gameid_listid: {
                    gameid: gameId,
                    listid: listId
                }
            }
        })

        return listGame_object
    
    } catch (e) {
        throw new Error("Could not read ListGame from database")
    
    } 

}

//update
const updateListGameInDb = async (listId:string, gameId:string, status: Status) => {
    
    //get object to update
    let listGame_object = await readListGameFromDb(listId, gameId)
    if (!listGame_object) throw new Error("ListGame does not exist")

    //update data
    switch (status) {
        case "Completed":
            listGame_object.datecompleted = new Date()
            break;
        case "InProgress":
            listGame_object.datestarted = new Date()
            listGame_object.datecompleted = null
            break;
        case "NotStarted":
            //listGame_object.dateadded = new Date()
            listGame_object.datestarted = null
            listGame_object.datecompleted = null

        break;
    }

    listGame_object.status = status

    try {
        //update object in db with new data
        let listGame_object_updated = await prisma.listGame.update({
            where: {
                gameid_listid: {
                    gameid: gameId,
                    listid: listId
                }
            },
            data: listGame_object
        })
    
    } catch (e) {
        throw new Error("Could not update ListGame in database")
    
    }

    return true

}

//delete
const deleteListGameFromDb = async (listId:string, gameId:string) => {
    
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
const addGameListToDb = async (userId: string, name: string): Promise<boolean> => {
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
const readGameListFromDb = async (listId:string): Promise<GameList | null> => {
    let gameList_object: GameList | null = await prisma.gameList.findUnique({
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

    return gameList_object

}

//update
const updateGameListInDb = async (listId: string, data: {}): Promise<boolean> => {
    try {
        await prisma.gameList.update({
            where: {
                id: listId,
            },
            data: data
        })
        return true
    
    } catch(e) {
        throw new Error("Failed to update GameList in database")

    }

}

//delete
const deleteGameListInDb = async (listId: string) => {
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
