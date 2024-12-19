import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutLayout = () => {
     const navigate = useNavigate()

     return (
          <section className='flex flex-col items-center justify-center h-screen'>
               <div className='flex flex-col items-center gap-y-10'>
                    <h1 className='text-3xl font-semibold'>
                         Anime<span className='text-primary font-semibold'>Kuy</span>
                    </h1>
                    <h3 className=''>
                         Hello what's up from About Page
                    </h3>
                    <button
                         onClick={() => navigate('/')}
                         className='bg-primary text-white p-2 rounded-md'>
                         Back to home
                    </button>
               </div>
          </section>
     )
}

export default AboutLayout