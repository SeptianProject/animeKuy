import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeBookMark } from '../../redux/slices/bookMarkSlice'
import Swal from 'sweetalert2'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import IconElement from '../elements/IconElement'
import { MdDelete, MdDeleteSweep } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BookMarksPage = () => {
     const bookMarkedAnimes = useSelector((state: RootState) => state.bookMark.bookMarked)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleRemoveBookMark = (animeId: number) => {
          dispatch(removeBookMark(animeId))
          Swal.fire({
               icon: 'info',
               title: 'Anime Unbookmarked',
               position: 'top',
               toast: true,
               timerProgressBar: true,
               showConfirmButton: false,
               timer: 2000
          })

          if (bookMarkedAnimes.length === 0) {
               return (
                    <section className="min-h-screen p-5">
                         <h1 className="text-2xl font-semibold mb-4">My Bookmarks</h1>
                         <div className="flex flex-col items-center justify-center h-[60vh]">
                              <p className="text-gray-500">No bookmarked anime yet</p>
                         </div>
                    </section>
               )
          }
     }

     return (
          <section className='space-y-8'>
               <div className='flex items-center justify-between w-full'>
                    <h1 className='text-lg font-medium'>BookMarks Anime</h1>
                    <div className='flex items-center gap-x-2'>
                         <h2 className='text-sm'>Delete all</h2>
                         <button
                              onClick={() => { }}
                              className='bg-secondary border border-white/10 p-1 rounded-md'>
                              <IconElement icon={MdDeleteSweep} />
                         </button>
                    </div>
               </div>
               <div className='flex flex-col justify-center items-center w-full gap-y-3'>
                    {bookMarkedAnimes.map((anime) => (
                         <div key={anime.mal_id}
                              onClick={() => navigate(`/detail/${anime.mal_id}`)}
                              className='flex items-center gap-x-2 border border-white/5
                              h-full bg-secondary w-full rounded-lg overflow-hidden'>
                              <LazyLoadImage
                                   src={anime.images.webp.large_image_url}
                                   effect='black-and-white'
                                   alt={anime.title}
                                   className='w-28 h-20 object-cover object-center rounded-md' />
                              <div className='flex flex-col items-start gap-y-1 w-full'>
                                   <h2 className='text-sm font-medium'>
                                        {anime.title_english || anime.title}
                                   </h2>
                                   <div className='flex items-center justify-between w-full pr-3'>
                                        <p className='text-sm font-light'>
                                             Score: {anime.score}/10
                                        </p>
                                        <button
                                             onClick={(e) => e.stopPropagation()}
                                             className='bg-dark border border-white/10 p-1 rounded-md'>
                                             <IconElement
                                                  icon={MdDelete}
                                                  onClick={() => handleRemoveBookMark(anime.mal_id)}
                                                  className=''
                                             />
                                        </button>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default BookMarksPage