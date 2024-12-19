import { useQuery } from '@tanstack/react-query'
import IconElement from '../elements/IconElement'
import { AiOutlineSortAscending } from 'react-icons/ai'
import { BsSortDown } from 'react-icons/bs'
import { getAnimeResponse } from '../../libs/ApiLib'
import ErrorElement from '../elements/ErrorElement'
import LoadingElement from '../elements/LoadingElement'
import GridLayout from '../layouts/GridLayout'

const SortPage = () => {
     const { data, error, isLoading } = useQuery({
          queryKey: ['sort', 'asc'],
          queryFn: () => getAnimeResponse('anime', 'sort=asc')
     })

     if (error) return <ErrorElement />
     if (isLoading || !data) return <LoadingElement />

     return (
          <section className='space-y-5'>
               <div className='flex items-center justify-between w-full gap-x-2'>
                    <h1 className='text-lg font-medium'>
                         Sort Animelist By
                    </h1>
                    <div className='flex items-center gap-x-2'>
                         <div className='flex items-center gap-x-1'>
                              <h2 className='text-sm'>Alphabet</h2>
                              <button
                                   onClick={() => { }}
                                   className='bg-secondary border border-white/10 p-1 rounded-md'>
                                   <IconElement
                                        icon={AiOutlineSortAscending}
                                        className=''
                                   />
                              </button>
                         </div>
                         <div className='flex items-center gap-x-1'>
                              <h2 className='text-sm'>Year</h2>
                              <button
                                   onClick={() => { }}
                                   className='bg-secondary border border-white/10 p-1 rounded-md'>
                                   <IconElement
                                        icon={BsSortDown}
                                        className=''
                                   />
                              </button>
                         </div>
                    </div>
               </div>
               <GridLayout api={data} isLoading={isLoading} />
          </section>
     )
}

export default SortPage