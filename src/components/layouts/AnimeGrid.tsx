import { AnimeList } from '../../types/anime'

type AnimeGridProps = {
     animeList: AnimeList[]
}

const AnimeGrid = ({ animeList }: AnimeGridProps) => {
     return (
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
               {animeList.map((item, index) => (
                    <div key={item.id}
                         className='flex border justify-center items-center rounded-sm'>
                         <h1>{index + 1}</h1>
                         <a href={item?.url} target='_blank' rel='noreferrer'>
                              <img src={item?.image} alt='Anime' />
                         </a>
                    </div>
               ))}
          </div>
     )
}

export default AnimeGrid