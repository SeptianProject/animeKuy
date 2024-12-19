import IconElement from "../elements/IconElement"
import { BiX } from "react-icons/bi"
import { SiAstro } from "react-icons/si"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toggleDrawer } from "../../redux/slices/drawerSlice"
import { useNavigate } from "react-router-dom"
import DrawerItems, { DrawerItemConfig } from "../fragments/DrawerItems"
import { MdHistory, MdSortByAlpha } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { BsBookmarksFill, BsFillQuestionCircleFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"
import React from "react"


const DrawerLayout = () => {
     const isOpen = useAppSelector(state => state.drawer.isOpen)
     const dispatch = useAppDispatch()
     const navigate = useNavigate()

     const features: DrawerItemConfig[] = React.useMemo(() => [
          {
               icon: MdSortByAlpha,
               title: 'Alpha Years',
               onClick: () => navigate('/alpha-years')
          },
          {
               icon: MdHistory,
               title: 'History',
               onClick: () => navigate('/history')
          },
          {
               icon: BsBookmarksFill,
               title: 'Bookmarks',
               onClick: () => navigate('/bookmarks')
          }
     ], [navigate])

     const informations: DrawerItemConfig[] = React.useMemo(() => [
          {
               icon: FaUser,
               title: 'Profile',
               onClick: () => navigate('/profile')
          },
          {
               icon: BsFillQuestionCircleFill,
               title: 'About',
               onClick: () => navigate('/about')
          },
          {
               icon: IoMdSettings,
               title: 'Settings',
               onClick: () => navigate('/settings')
          }
     ], [navigate])

     const handleDrawerClose = () => {
          dispatch(toggleDrawer())
     }

     return (
          <>
               <div className={`fixed left-0 w-48 md:w-44 h-full z-50 bg-dark border-r 
               border-white/5 transition-all duration-300 ease-in-out
               ${isOpen ? '' : '-translate-x-full md:translate-x-0'}`}>
                    <ul className="flex flex-col items-start w-full pt-5 gap-y-8 px-5">
                         <li className="flex items-center justify-center gap-x-2 md:hidden">
                              <button
                                   className="md:hidden bg-white/10 p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
                                   <IconElement
                                        icon={BiX}
                                        onClick={handleDrawerClose} />
                              </button>
                         </li>
                         <li className="flex items-center justify-center gap-x-2">
                              <button onClick={() => navigate('/')}
                                   className="bg-primary p-2 rounded-xl">
                                   <IconElement icon={SiAstro} />
                              </button>
                              <h2 className="text-white text-base font-medium">
                                   Anime<span className="text-primary">Kuy</span>
                              </h2>
                         </li>
                         <div className="flex flex-col gap-y-3 w-full items-start">
                              <h2 className="text-primary text-xs font-light">Features</h2>
                              <DrawerItems drawerItems={features} />
                         </div>
                         <div className="flex flex-col gap-y-3 w-full items-start">
                              <h2 className="text-primary text-xs font-light">Information</h2>
                              <DrawerItems drawerItems={informations} />
                         </div>
                    </ul>
               </div>
          </>
     )
}

export default DrawerLayout
