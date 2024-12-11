import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getAnimeResponse } from "../../libs/ApiLib"
import ErrorElement from "../elements/ErrorElement"
import { AnimeData } from "../../interface/anime"
import LoadingElement from "../elements/LoadingElement"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const DetailPage = () => {
     const { id } = useParams<{ id: string }>()
     const { data, error, isLoading } = useQuery({
          queryKey: ['detail'],
          queryFn: () => getAnimeResponse(`anime/${id}`)
     })

     const anime = data as AnimeData
     if (error) return <ErrorElement />

     return (
          <div className="flex items-center justify-center">
               {isLoading ? <LoadingElement /> : (
                    <div className="flex">
                         <div>
                              {isLoading ? <Skeleton />
                                   : <img
                                        src={anime.images.webp.image_url}
                                        alt={anime.title}
                                        className=""
                                   />
                              }
                         </div>
                         <div>
                              <h1 className="text-2xl font-bold">
                                   Judul:
                                   <span className="text-lg font-medium ml-2">
                                        {anime.title_english} | {anime.title_japanese}
                                   </span>
                              </h1>
                              <h1 className="text-2xl font-bold">
                                   Ditayangkan:
                                   <span className="text-lg font-medium ml-2">
                                        {anime.aired.from.split('T')[0]} - {anime.aired.to?.split('T')[0] ?? 'unknown'}
                                   </span>
                              </h1>
                              <h1>

                              </h1>
                         </div>
                    </div>
               )}
          </div>
     )
}

export default DetailPage