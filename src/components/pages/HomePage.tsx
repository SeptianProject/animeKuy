import { getAnimeResponse, getNestedAnimeResponse } from "../../libs/ApiLib"
import GridLayout from "../layouts/GridLayout"
import { useQuery } from "@tanstack/react-query"
import ErrorElement from "../elements/ErrorElement"
import CardCategory from "../fragments/CardCategory"

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
      queryFn: () => getNestedAnimeResponse('recommendations/anime', 'entry')
    })

  // const [showAuthModal, setShowAuthModal] = React.useState(true)
  // const handleCloseAuthModal = () => setShowAuthModal(false)

  const hasError = topAnimeError || recommendationsError
  const hasLoading = topAnimeLoading || recommendationsLoading

  if (hasError) return <ErrorElement />

  return (
    <section className="w-full space-y-5">
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="text-xl font-semibold">Top Anime</h1>
          <CardCategory />
        </div>
        <GridLayout api={topAnime} isLoading={hasLoading} />
      </div>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="text-xl font-semibold">Recommendations</h1>
          <CardCategory />
        </div>
        <GridLayout api={recommendations} isLoading={hasLoading} />
      </div>
    </section>
  )
}

export default HomePage