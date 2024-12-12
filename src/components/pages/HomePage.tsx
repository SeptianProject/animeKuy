import { getAnimeResponse, getNestedAnimeResponse } from "../../libs/ApiLib"
import GridLayout from "../layouts/GridLayout"
import Header from "../layouts/Header"
import { useQuery } from "@tanstack/react-query"
import ErrorElement from "../elements/ErrorElement"
import AuthModal from "../layouts/AuthModal"
import React from "react"
import ButtonElement from "../elements/ButtonElement"

const HomePage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleIsOpen = () => setIsOpen(!isOpen)
  const handleOnClose = () => setIsOpen(false)

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
      queryFn: () => getNestedAnimeResponse('recommendations/anime', 'entry?max=10')
    })

  const hasError = topAnimeError || recommendationsError
  const hasLoading = topAnimeLoading || recommendationsLoading

  if (hasError) return <ErrorElement />

  return (
    <section className="relative flex flex-col items-center justify-center mx-auto pt-20 px-10">
      <div className="absolute top-5 right-5">
        <ButtonElement onClick={handleIsOpen} text="Login Kuy" />
      </div>
      <AuthModal isOpen={isOpen} onClose={handleOnClose} />
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm
                    ${isOpen ? 'z-20 translate-x-0' : '-z-10 opacity-0 pointer-events-none'}`} />
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text">
          Anime<span className="text-blue-500">Kuy </span>
          Ci<span className="text-blue-500">huy</span>🤙
        </h1>
      </div>
      <div className="space-y-10">
        <div className="min-h-screen w-full h-full">
          <Header title="Top Anime" />
          <div className="flex items-center justify-center">
            <GridLayout api={topAnime} isLoading={hasLoading} />
          </div>
        </div>
        <div className="border-t-2 border-gray-600 min-h-screen">
          <Header title="Recommendations" />
          <div className="flex items-center justify-center">
            <GridLayout api={recommendations} isLoading={hasLoading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage