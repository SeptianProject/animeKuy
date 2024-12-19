import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getAnimeResponse } from "../../libs/ApiLib"
import ErrorElement from "../elements/ErrorElement"
import { AnimeData } from "../../interface/anime"
import 'react-loading-skeleton/dist/skeleton.css'
import { MdKeyboardArrowLeft } from "react-icons/md"
import IconElement from "../elements/IconElement"
import SkeletonElement from "../elements/SkeletonElement"
import { LazyLoadImage } from "react-lazy-load-image-component"
import React from "react"
import VidePlayerLayout from "../layouts/VidePlayerLayout"
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs"
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { addBookMark, removeBookMark } from "../../redux/slices/bookMarkSlice"
import TextSpan from "../elements/TextSpan"

const DetailPage = () => {
     const dispatch = useDispatch()
     const { id } = useParams<{ id: string }>()
     const bookMarkedAnimes = useSelector((state: RootState) => state.bookMark.bookMarked)
     const { data, error, isLoading } = useQuery({
          queryKey: ['detail'],
          queryFn: () => getAnimeResponse(`anime/${id}`)
     })

     const isBookMarked = React.useMemo(() => {
          return bookMarkedAnimes.find((anime: AnimeData) => anime.mal_id === Number(id))
     }, [bookMarkedAnimes, id])

     const handleBookMarkActive = () => {
          if (!isBookMarked) {
               dispatch(addBookMark(data))
               Swal.fire({
                    icon: 'success',
                    title: 'Anime Bookmarked',
                    position: 'top',
                    toast: true,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 2000,
               })
          } else {
               dispatch(removeBookMark(data.mal_id))
               Swal.fire({
                    icon: 'info',
                    title: 'Anime Unbookmarked',
                    position: 'top',
                    toast: true,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 2000
               })
          }
     }

     const anime = data as AnimeData
     if (error || !anime || !data) return <ErrorElement />
     if (isLoading) return <SkeletonElement className="w-full h-60" />

     return (
          <section className="min-h-screen w-full px-5 pt-5 overflow-hidden pb-20">
               <div className="flex items-center justify-between" >
                    <div className="flex items-center gap-x-2">
                         <IconElement
                              onClick={() => window.history.back()}
                              icon={MdKeyboardArrowLeft} />
                         <h2 className="text-lg font-medium">
                              Score:
                              <span className="ml-2 text-base font-normal">
                                   {anime.score} / 10
                              </span>
                         </h2>
                    </div>
                    <IconElement
                         icon={isBookMarked ? BsBookmarksFill : BsBookmarks}
                         onClick={handleBookMarkActive}
                    />
               </div >
               {/* image */}
               <div className="pt-5 space-y-2" >
                    {isLoading ? <SkeletonElement className="w-full h-60" />
                         : <LazyLoadImage
                              src={anime.images.webp.large_image_url}
                              effect="black-and-white"
                              alt=""
                              wrapperClassName="w-full object-cover object-center h-60 rounded-lg"
                              className="object-cover object-center w-full h-full rounded-lg"
                         />
                    }
                    <h1 className="text-center text-lg font-medium lg:text-2xl lg:font-semibold">
                         {`${anime?.title_english ?? anime?.title}`}
                    </h1>
               </div >
               {/* sinopsis */}
               <div className="flex flex-col items-start pt-12" >
                    <h1 className="font-semibold text-2xl">Sinopsis</h1>
                    <p className="text-sm font-light pt-2">
                         {anime.synopsis.split('.')[0]}
                         <span
                              className="cursor-pointer">....</span>
                    </p>
                    <TextSpan
                         title="Synonyms: "
                         text={`${anime.title_synonyms[0] ?? anime.title}`} />
                    <TextSpan
                         title="Japanese: "
                         text={`${anime.title_japanese ?? anime.title}`} />
                    <TextSpan
                         title="English: "
                         text={`${anime.title_english ?? anime.title}`} />
                    <TextSpan
                         title="Type: "
                         text={`${anime.type ?? 'TV'}`} />
                    <TextSpan
                         title="Episodes: "
                         text={`${anime.episodes ?? 'Ongoing'}`} />
                    <TextSpan
                         title="Aired: "
                         text={`${anime.aired.from?.split('T')[0] ?? ''}`} />
                    <TextSpan
                         title="Premiered: "
                         text={`${anime.aired.to?.split('T')[0] ?? ''}`} />
                    <TextSpan
                         title="Broadcast: "
                         text={`${anime.broadcast.day ?? ''} 
                                        at ${anime.broadcast.time ?? ''}
                                        (${anime.broadcast.timezone})`} />
                    <TextSpan
                         title="Studios: "
                         text={`${anime.studios[0]?.name ?? ''}`} />
                    <TextSpan
                         title="Source: "
                         text={`${anime.source ?? 'Manga'}`} />
                    <TextSpan
                         title="Genre: "
                         text={`${anime.genres[0]?.name ?? ''}`} />
                    <TextSpan
                         title="Themes: "
                         text={`${anime.themes[10] ?? ''}`} />
                    <TextSpan
                         title="Demographic: "
                         text={`${anime.demographics[0]?.name ?? ''}`} />
                    <TextSpan
                         title="Duration: "
                         text={`${anime.duration ?? ''}`} />
                    <TextSpan
                         title="Rating: "
                         text={`${anime.rating ?? ''}`} />
               </div >
               <div>
                    <VidePlayerLayout youtubeId={anime.trailer.youtube_id} />
               </div>
          </section >
     )
}

export default DetailPage