import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import React from 'react'


const CardCategory = () => {
     const [selectedCategory, setSelectedCategory] = React.useState<string>('')
     const categories = [
          'Action', 'Adventure', 'Comedy',
          'Drama', 'Fantasy', 'Horror',
          'Mystery', 'Psychological', 'Romance',
          'Sci-Fi', 'Slice of Life', 'Supernatural'
     ]

     const handleSelectCategory = (category: string) => {
          setSelectedCategory(category)
     }


     return (
          <Swiper slidesPerView={'auto'} className='mt-4 w-auto max-w-full'>
               {categories.map((category) => (
                    <SwiperSlide
                         key={category}
                         onClick={() => handleSelectCategory(category)}
                         className='!w-auto !h-10 pr-2'>
                         <div className={`size-full border-2 rounded-lg px-4
                                   transition-all duration-300 ease-in-out cursor-pointer
                                   hover:border-primary hover:bg-darkCard
                                   ${selectedCategory === category
                                   ? 'border-primary bg-darkCard'
                                   : 'border-white/10 bg-transparent'}`}>
                              <div className="flex flex-col items-center justify-center h-full">
                                   <h3 className='text-white/80 text-sm font-medium w-full'>
                                        {category}
                                   </h3>
                              </div>
                         </div>
                    </SwiperSlide>
               ))}
          </Swiper>
     )
}

export default CardCategory