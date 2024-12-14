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

const DetailPage = () => {
     const { id } = useParams<{ id: string }>()
     const { data, error, isLoading } = useQuery({
          queryKey: ['detail'],
          queryFn: () => getAnimeResponse(`anime/${id}`)
     })

     const anime = data as AnimeData
     if (error) return <ErrorElement />

     return (
          <section className="min-h-screen w-full px-5 pt-5 overflow-hidden pb-20">
               {data && (
                    <>
                         <div className="flex items-center justify-start gap-x-2">
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
                         {/* image */}
                         <div className="pt-5 space-y-2">
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
                                   {`${anime.title_english ?? anime.title}`}
                              </h1>
                         </div>
                         {/* sinopsis */}
                         <div className="flex flex-col items-start pt-12">
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
                                   text={`${anime.studios[0].name ?? ''}`} />
                              <TextSpan
                                   title="Source: "
                                   text={`${anime.source ?? 'Manga'}`} />
                              <TextSpan
                                   title="Genre: "
                                   text={`${anime.genres[0].name ?? ''}`} />
                              <TextSpan
                                   title="Themes: "
                                   text={`${anime.themes[10] ?? ''}`} />
                              <TextSpan
                                   title="Demographic: "
                                   text={`${anime.demographics[0].name ?? ''}`} />
                              <TextSpan
                                   title="Duration: "
                                   text={`${anime.duration ?? ''}`} />
                              <TextSpan
                                   title="Rating: "
                                   text={`${anime.rating ?? ''}`} />
                         </div>
                         <div>
                              <VidePlayerLayout youtubeId={anime.trailer.youtube_id} />
                         </div>
                    </>
               )}
          </section>
     )
}

export default DetailPage

interface TextSpanProps {
     title: string
     text: string
}

const TextSpan: React.FC<TextSpanProps> = ({ text, title }) => {
     return (
          <div className="pt-5 flex items-center gap-x-2">
               <h3 className="font-semibold text-sm">{title}</h3>
               <p className="text-sm font-light">{text}</p>
          </div>
     )
}