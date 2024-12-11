import { getAnimeResponse, getNestedAnimeResponse } from "../../libs/ApiLib"
import GridLayout from "../layouts/GridLayout"
import Header from "../layouts/Header"
import { useQuery } from "@tanstack/react-query"
import ErrorElement from "../elements/ErrorElement"

const HomePage = () => {
  const { data: topAnime,
    error: topAnimeError,
    isLoading: topAnimeLoading } = useQuery({
      queryKey: ['topAnime'],
      queryFn: () => getAnimeResponse('top/anime', 'limit=10')
    })

  const { data: recommendations,
    error: recommendationsError,
    isLoading: recommendationsLoading } = useQuery({
      queryKey: ['recommendations'],
      queryFn: () => getNestedAnimeResponse('recommendations/anime', 'limit=10')
    })

  const hasError = topAnimeError || recommendationsError
  const hasLoading = topAnimeLoading || recommendationsLoading

  if (hasError) return <ErrorElement />

  return (
    <section className="flex flex-col items-center justify-center mx-auto pt-10 px-10">
      <div>
        <h1 className="text-4xl font-bold text">
          Anime<span className="text-blue-500">Kuy </span>
          Ci<span className="text-blue-500">huy</span>🤙
        </h1>
      </div>
      <div className="space-y-10">
        <div className="min-h-screen w-full h-full">
          <Header title="Top Anime" />
          <div className="flex items-center justify-center">
            <GridLayout key={'topAnime'} api={topAnime} isLoading={hasLoading} />
          </div>
        </div>
        <div className="border-t-2 border-gray-600 min-h-screen">
          <Header title="Recommendations" />
          <div className="flex items-center justify-center">
            <GridLayout key={'recommendations'} api={recommendations} isLoading={hasLoading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage