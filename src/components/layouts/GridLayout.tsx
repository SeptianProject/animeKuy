import React from "react"
import { AnimeData } from "../../interface/anime"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SkeletonElement from "../elements/SkeletonElement"
import useResponsiveDrawer from "../../hooks/useResponsiveDrawer"
import { useAppSelector } from "../../redux/hooks"

type AnimeGridProps = {
     isLoading: boolean
     api: AnimeData[]
}

const GridLayout: React.FC<AnimeGridProps> = ({ api, isLoading }) => {
     const navigate = useNavigate()
     const isDrawerOpen = useAppSelector(state => state.drawer.isOpen)
     useResponsiveDrawer()

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
               {api.map((item, index) => (
                    <div
                         key={index}
                         onClick={() => handleOnDetail(item.mal_id.toString())}
                         className="relative flex flex-col items-start rounded-md cursor-pointer 
                         group transition-all duration-300">
                         <LazyLoadImage
                              src={item.images.webp.image_url}
                              alt={item.title}
                              effect="black-and-white"
                              wrapperProps={{
                                   style: { transitionDelay: `${index * 0.3}s` }
                              }}
                              wrapperClassName="w-full h-full"
                              className={`rounded-lg w-60 object-cover object-top border-2
                                   border-white/20 transition-all duration-300
                              ${isDrawerOpen ? 'h-44 xs:h-48 sm:h-[14rem]'
                                        : 'h-56 xs:h-60 sm:h-[16rem] md:h-[20rem] md:w-[15rem]'}`}
                         />
                    </div>
               ))}
          </div>
     )
}

export default GridLayout