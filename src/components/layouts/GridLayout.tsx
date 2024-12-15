import React from "react"
import { AnimeData } from "../../interface/anime"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SkeletonElement from "../elements/SkeletonElement"

type AnimeGridProps = {
     isLoading: boolean
     api: AnimeData[]
}

const GridLayout: React.FC<AnimeGridProps> = ({ api, isLoading }) => {
     const navigate = useNavigate()

     const handleOnDetail = (id: string) => {
          navigate(`/detail/${id}`)
     }

     if (isLoading) {
          return (
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {Array(10).fill(0).map((_, index) => (
                         <SkeletonElement key={index} className="w-40 h-52 xs:h-60 md:h-[20rem] md:w-[15rem]" />
                    ))}
               </div>
          )
     }

     return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
               {api.map((item, index) => (
                    <div
                         key={index}
                         onClick={() => handleOnDetail(item.mal_id.toString())}
                         className="relative flex flex-col items-start 
                         size-full rounded-md cursor-pointer group transition-all duration-300
                         hover:scale-105 hover:-translate-y-2">
                         <LazyLoadImage
                              src={item.images.webp.image_url}
                              alt={item.title}
                              effect="black-and-white"
                              wrapperProps={{
                                   style: { transitionDelay: `${index * 1}s` }
                              }}
                              className="rounded-lg w-60 h-60 xs:h-60 md:h-[20rem] md:w-[15rem] 
                              object-cover object-top border-2 border-white/20"
                         />
                         <div className="absolute inset-x-0 bottom-0">
                              <div className="flex flex-col items-start opacity-0 text-white
                              justify-start w-auto px-4 py-5 transition-all duration-300 rounded-tr-2xl
                              group-hover:opacity-100 group-hover:bg-primary/70">
                                   <h1 className="text-sm md:text-lg font-bold">{item.title}</h1>
                                   <h1 className="text-xs md:text-sm font-medium">{item.title_japanese}</h1>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     )
}

export default GridLayout