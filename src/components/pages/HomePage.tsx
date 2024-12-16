import { getAnimeResponse, getNestedAnimeResponse } from "../../libs/ApiLib"
import GridLayout from "../layouts/GridLayout"
import Header from "../layouts/Header"
import { useQuery } from "@tanstack/react-query"
import ErrorElement from "../elements/ErrorElement"
import AuthModal from "../layouts/AuthModal"
import React from "react"
import ButtonElement from "../elements/ButtonElement"
import LogoTitle from "../elements/LogoTitle"

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
    <section className="relative flex-col items-center justify-center mx-auto pt-10 lg:pt-20 px-7 w-full min-h-screen bg-dark">
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${isOpen ? 'z-20 translate-x-0' : '-z-10 opacity-0 pointer-events-none'}`} />
      <AuthModal isOpen={isOpen} onClose={handleOnClose} />
      <div className="flex items-center justify-between w-full pb-10">
        <div className="">
          <LogoTitle />
        </div>
        <div className="lg:absolute top-5 right-5">
          <ButtonElement
            onClick={handleIsOpen}
            text="Login Kuy"
            className="text-sm md:text-base"
          />
        </div>
      </div>
      <div className="space-y-10 w-full">
        <div className="min-h-screen w-full h-full">
          <Header title="Top Anime" />
          <div className="flex items-center justify-center pt-2 w-full">
            <GridLayout api={topAnime} isLoading={hasLoading} />
          </div>
        </div>
        <div className="border-t-2 min-h-screen w-full h-full">
          <Header title="Recommendations" />
          <div className="flex items-center justify-center pt-2 w-full">
            <GridLayout api={recommendations} isLoading={hasLoading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage