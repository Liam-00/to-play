

type IgdbGameType = {
    title: string,
    igdbid: number,
    cover: string | null,
    releasedate: Date | null,
    publisher: string[],
    developer: string[],
    genres: string[],
    description: string | null,
    storyline: string | null
}

type GameType = IgdbGameType & {
    id: string,
}

type ListGameAddonType = {
    id: string,
    status: string,
    dateadded: Date | null,
    datestarted: Date | null,
    datecompleted: Date | null
}

type ListGameType = GameType & ListGameAddonType

type GameListType = {
    id: string,
    title: string,
    games: ListGameType[]
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

export type {GameType, ListGameType, GameListType, IgdbGameResponseType, IgdbGameType}