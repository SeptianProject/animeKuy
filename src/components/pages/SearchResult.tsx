import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getAnimeResponse } from '../../libs/ApiLib'
import GridLayout from '../layouts/GridLayout'
import LoadingElement from '../elements/LoadingElement'
import ErrorElement from '../elements/ErrorElement'

const SearchResult = () => {
     const { keyword } = useParams<{ keyword: string }>()
     const { data, error, isLoading } = useQuery({
          queryKey: ['search', keyword],
          queryFn: () => getAnimeResponse('anime', `q=${keyword}`),
          enabled: !!keyword
     })

     const formattedKeyword = React.useMemo(() => {
          if (!keyword) return ''

          return decodeURIComponent(keyword)
               .split(/[\s%20]+/)
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(' ')
     }, [keyword])

     React.useEffect(() => {
          document.title = `Search | ${formattedKeyword?.toUpperCase()}`
     }, [formattedKeyword])

     if (error) return <ErrorElement />

     if (isLoading) return <LoadingElement />

     return (
          <section className="w-full pt-5">
               <div className="flex flex-col gap-y-10">
                    <h1 className="text-xl font-semibold text-center">
                         Search Result For
                         <br />{formattedKeyword}
                    </h1>
                    <GridLayout api={data} isLoading={isLoading} />
               </div>
          </section>
     )
}

export default SearchResult