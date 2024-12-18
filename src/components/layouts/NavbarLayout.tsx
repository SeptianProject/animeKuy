import { LuEqual } from 'react-icons/lu'
import IconElement from '../elements/IconElement'
import { BsSearch } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleDrawer } from '../../redux/slices/drawerSlice'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLayout = () => {
     const searchRef = useRef<HTMLInputElement>(null)
     const isOpen = useAppSelector(state => state.drawer.isOpen)
     const dispatch = useAppDispatch()
     const navigate = useNavigate()


     const handleDrawerToggle = () => dispatch(toggleDrawer())

     const handleSearch = (event: React.FormEvent) => {
          event.preventDefault()
          const keyword = searchRef.current?.value
          if (keyword?.trim()) {
               navigate(`/search-result/${encodeURIComponent(keyword.trim())}`)
          }
     }

     useEffect(() => {
          searchRef.current?.focus()
     })

     return (
          <nav className="fixed w-full top-0 z-50 px-5 h-20 bg-dark border-b border-white/5">
               <div className="flex items-center justify-end h-full w-full gap-x-5 md:px-10">
                    <div className="flex items-center justify-between w-full md:flex-none md:w-auto">
                         {/* Mobile menu */}
                         <button className={`md:hidden bg-white/10 p-2 rounded-xl
                         transition-all duration-300 ease-in-out
                         ${isOpen ? '-translate-x-20' : ''}`}
                              onClick={handleDrawerToggle}>
                              <IconElement icon={LuEqual} />
                         </button>
                         {/* Search form */}
                         <form
                              onSubmit={handleSearch}
                              className="w-60 lg:w-80 flex items-center justify-between 
                              rounded-md py-1 px-3 gap-x-3 bg-secondary ring-2 ring-white/10">
                              <input
                                   ref={searchRef}
                                   type="text"
                                   placeholder="Type to search..."
                                   className="placeholder:text-white/50 p-1 w-full
                                        outline-none border-none bg-secondary text-white/80"/>
                              <IconElement
                                   onClick={handleSearch}
                                   icon={BsSearch}
                                   className="size-4 md:size-5 text-white/80" />
                         </form>
                    </div>
                    <button className="hidden md:block bg-primary px-6 py-2 rounded-md
                              hover:bg-primary/80 transition-all duration-300 ease-in-out">
                         Login
                    </button>
               </div>
          </nav>
     )
}

export default NavbarLayout