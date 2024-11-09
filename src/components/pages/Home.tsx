/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { useEffect, useState } from "react"

const baseUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL

type AnimeList = {
     id: string,
     url: string
     image: string
}

const Home = () => {
     const [loading, setLoading] = useState<boolean>(true)
     const [anime, setAnime] = useState<AnimeList[]>([])

     useEffect(() => {
          setLoading(true)
          const getAnimelist = async () => {
               try {
                    const response = await axios.get(`${baseUrl}/top/anime`)
                    const data = response.data.data.map((item: any) => ({
                         id: item.mal_id,
                         url: item.url,
                         image: item.images.jpg.image_url
                    }))
                    // console.log(data)

                    setAnime(data)
               } catch (error) {
                    console.error(error)
               } finally {
                    setLoading(false)
               }
          }

          getAnimelist()
     }, [])
     return (
          <div className="bg-dark2">
               <div>
                    <h1>My Anime</h1>
               </div>
               <div>
                    {loading ? (
                         <>
                              <p>Loading...</p>
                         </>
                    ) : (
                         <div className="grid grid-cols-4">
                              {anime.map((item, index) => (
                                   <div key={index} className="flex border rounded-sm">
                                        <h1>{index + 1}</h1>
                                        <a href={item?.url} target="_blank" rel="noreferrer">
                                             <img src={item?.image} alt="Anime" />
                                        </a>
                                   </div>
                              ))}
                         </div>
                    )}
               </div>
          </div >
     )
}

export default Home