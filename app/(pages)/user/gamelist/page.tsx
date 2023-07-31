import GameList__Card from '@/app/components/GameList__Card'
import GameList from '@/app/components/GameList'
import GameList__GameAddButton from '@/app/components/GameList__GameAddButton'
import GameList__GameCard from '@/app/components/GameList__GameCard'
import videogame_type from '@/app/types/videogame_type'

let gamelist: videogame_type[] = [
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
    title: "The Legend of Zelda: Tears of the Kingdom",
    info: [
      { label: "Publisher", content: "Nintendo" },
      { label: "Studio", content: "Nintento Nintendo" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World', 'Dingus']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
    title: "The Legend of Zelda: Tears of the Kingdom",
    info: [
      { label: "Publisher", content: "Nintendo" },
      { label: "Studio", content: "Nintento Nintendo" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World', 'Dingus']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
    title: "The Legend of Zelda: Tears of the Kingdom",
    info: [
      { label: "Publisher", content: "Nintendo" },
      { label: "Studio", content: "Nintento Nintendo" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World', 'Dingus']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
    title: "The Legend of Zelda: Tears of the Kingdom",
    info: [
      { label: "Publisher", content: "Nintendo" },
      { label: "Studio", content: "Nintento Nintendo" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World', 'Dingus']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
    title: "The Legend of Zelda: Tears of the Kingdom",
    info: [
      { label: "Publisher", content: "Nintendo" },
      { label: "Studio", content: "Nintento Nintendo" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World', 'Dingus']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  },
  {
    imageURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    title: "Resident Evil 4",
    info: [
      { label: "Publisher", content: "Capcom" },
      { label: "Studio", content: "Capcom Development Division 1" },
      { label: "Description", content: "NintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendoNintendo" }
    ],
    genreList: ['Horror', 'RPG', 'Open World']
  }
]

const page = () => {
  return (
    <GameList gameList={gamelist}>

    </GameList>
  )
}

export default page