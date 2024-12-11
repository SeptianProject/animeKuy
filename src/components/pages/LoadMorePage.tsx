import { useQuery } from "@tanstack/react-query"
import { getAnimeResponse } from "../../libs/ApiLib"
import GridLayout from "../layouts/GridLayout"
import ErrorElement from "../elements/ErrorElement"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"


const LoadMorePage = () => {
     const navigate = useNavigate()
     const { data, error, isLoading } = useQuery({
          queryKey: ['loadMore'],
          queryFn: () => getAnimeResponse('top/anime')
     })

     if (error) return <ErrorElement />

     return (
          <section className="flex flex-col items-center justify-center px-10 py-10 relative space-y-10">
               <button onClick={() => navigate('/')}
                    className="absolute top-24 left-10 flex items-center justify-center">
                    <MdKeyboardArrowLeft className="size-7" />
                    <span className="text-xl font-medium">Kembali</span>
               </button>
               <div className="flex items-center justify-center">
                    <h1 className="text-4xl font-bold text">
                         Anime<span className="text-blue-500">Kuy </span>
                         Ci<span className="text-blue-500">huy</span>🤙
                    </h1>
               </div>
               <GridLayout api={data} isLoading={isLoading} />
          </section>
     )
}

export default LoadMorePage