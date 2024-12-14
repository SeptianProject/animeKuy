import { useQuery } from "@tanstack/react-query"
import { getAnimeResponse } from "../../libs/ApiLib"
import GridLayout from "../layouts/GridLayout"
import ErrorElement from "../elements/ErrorElement"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import LogoTitle from "../elements/LogoTitle"


const LoadMorePage = () => {
     const navigate = useNavigate()
     const { data, error, isLoading } = useQuery({
          queryKey: ['loadMore'],
          queryFn: () => getAnimeResponse('top/anime')
     })

     if (error) return <ErrorElement />

     return (
          <section className="flex flex-col items-center justify-center px-10 py-10 relative space-y-10">
               <div className="flex flex-col items-start justify-center gap-y-5 w-full">
                    <button onClick={() => navigate('/')}
                         className="lg:absolute top-24 left-10 flex items-center justify-center">
                         <MdKeyboardArrowLeft className="size-5 md:size-7" />
                         <span className="text-sm md:text-xl font-medium">Kembali</span>
                    </button>
                    <div className="flex items-center justify-center">
                         <LogoTitle />
                    </div>
               </div>
               <GridLayout api={data} isLoading={isLoading} />
          </section>
     )
}

export default LoadMorePage