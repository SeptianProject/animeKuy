import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
     title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
     const navigate = useNavigate()

     const handleLoadMore = () => {
          navigate('/load-more')
     }

     return (
          <div className='flex items-center justify-between w-full py-5'>
               <div className='flex flex-col items-start'>
                    <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
                    <div className='w-full h-1 rounded-full bg-gradient-to-r 
                    from-blue-700 to-white' />
               </div>
               <button onClick={handleLoadMore}
                    className='flex items-center justify-center group text-center'>
                    <h3 className='text-sm md:text-base
                    font-medium group-hover:translate-x-2 transition-all duration-300'>
                         Lihat Semua
                    </h3>
                    <MdKeyboardArrowRight className='size-6 scale-0 group-hover:scale-100 
                    translate-x-0 group-hover:translate-x-1  transition-all duration-300' />
               </button>
          </div>
     )
}

export default Header