import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import { AnimeData } from '../../types/anime';

const baseUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL

const Home = () => {
     const { data, error, isLoading } = useQuery({
          queryKey: ['animeList'],
          queryFn: async () => {
               // Use Fetch
               return await fetch(`${baseUrl}/anime`)
                    .then(res => res.json())
                    .then(res => res.data)
               // Use Axios
               // try {
               //      // const response = await axios.get(`${baseUrl}/anime`)
               //      // return response.data.data
               // } catch (error) {
               //      console.error(error)
               // }
          }
     })

     if (error) return 'An error has occurred: ' + error.message

     return (
          <div className="bg-dark min-h-screen p-4">
               <div className="mb-6">
                    <h1 className="text-2xl font-bold">My Anime</h1>
               </div>
               <div>
                    {isLoading ? (
                         <div className="flex justify-center items-center">
                              <p className='text-4xl text-white font-bold'>Loading...</p>
                         </div>
                    ) : (
                         <div className='grid grid-cols-2 lg:grid-cols-5 gap-5 w-full'>
                              {data.map((item: AnimeData) => (
                                   <div key={item.mal_id}
                                        className='flex flex-col justify-center items-center
                                        border-b-4
                                        rounded-2xl overflow-hidden '>
                                        <a href={item?.url} target='_blank' rel='noreferrer'>
                                             <img className='w-screen h-96' src={item?.images.jpg.image_url} alt='Anime' />
                                        </a>
                                   </div>
                              ))}
                         </div>
                    )}
               </div>
          </div>
     )
}

export default Home