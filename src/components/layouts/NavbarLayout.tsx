import { LuEqual } from 'react-icons/lu'
import IconElement from '../elements/IconElement'
import { BsSearch } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleDrawer } from '../../redux/slices/drawerSlice'

const NavbarLayout = () => {
     const isOpen = useAppSelector(state => state.drawer.isOpen)
     const dispatch = useAppDispatch()

     const handleDrawerToggle = () => {
          dispatch(toggleDrawer())
     }

     return (
          <div className="fixed w-full md:left-20 top-0 z-50 px-5 h-20 bg-dark md:border-b border-white/5">
               <div className="flex items-center justify-between h-full w-full">
                    <h1 className="hidden md:block text-2xl font-bold w-full">
                         Anime<span className="text-primary">Kuy</span>
                    </h1>
                    <div className="flex items-center justify-between w-full md:w-auto 
                    md:gap-x-4 md:-translate-x-20">
                         <button className={`md:hidden bg-white/10 p-2 rounded-xl
                         transition-all duration-300 ease-in-out
                         ${isOpen ? '-translate-x-20' : ''}`}
                              onClick={handleDrawerToggle}>
                              <IconElement icon={LuEqual} />
                         </button>
                         <div className="w-60 lg:w-80 flex items-center justify-between 
                         rounded-md py-1 px-3 gap-x-3
                         bg-secondary ring-2 ring-white/10">
                              <input
                                   type="text"
                                   placeholder="Search..."
                                   className="placeholder:text-white/50 p-1 w-full
                                        outline-none border-none bg-secondary text-white/80"/>
                              <IconElement
                                   icon={BsSearch}
                                   className="size-4 md:size-5 text-white/80" />
                         </div>
                         <button className="hidden md:block bg-primary px-6 py-2 rounded-md 
                              hover:bg-primary/80 transition-all duration-300 ease-in-out">
                              Login
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default NavbarLayout