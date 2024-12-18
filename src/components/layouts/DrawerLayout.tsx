import React from "react"
import IconElement from "../elements/IconElement"
import { BiX } from "react-icons/bi"
import { SiAstro } from "react-icons/si"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toggleDrawer } from "../../redux/slices/drawerSlice"
import { IconType } from "react-icons"
import { useNavigate } from "react-router-dom"
import { MdHistory, MdSortByAlpha } from "react-icons/md"
import { IoBookmarks } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"

interface DrawerItemConfig {
     icon: IconType
     title: string
}

const DrawerLayout = () => {
     const isOpen = useAppSelector(state => state.drawer.isOpen)
     const dispatch = useAppDispatch()
     const navigate = useNavigate()

     const features: DrawerItemConfig[] = React.useMemo(() => [
          {
               icon: MdHistory,
               title: 'History'
          },
          {
               icon: MdSortByAlpha,
               title: 'Alpha Years'
          },
          {
               icon: IoBookmarks,
               title: 'Bookmarks'
          }
     ], [])

     const informations: DrawerItemConfig[] = React.useMemo(() => [
          {
               icon: FaUser,
               title: 'Profile'
          },
          {
               icon: BsFillQuestionCircleFill,
               title: 'About'
          },
          {
               icon: IoMdSettings,
               title: 'Settings'
          }
     ], [])

     const handleDrawerClose = () => {
          dispatch(toggleDrawer())
     }

     return (
          <>
               <div className={`fixed left-0 w-48 h-full z-50 bg-dark border-r 
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
                              {features.map((item, index) => (
                                   <li key={index}
                                        className="flex items-center justify-start
                                   hover:bg-white/10 rounded-md cursor-pointer group w-full
                                   transition-all duration-300 ease-in-out">
                                        <div className="p-2 flex items-center justify-center gap-x-2">
                                             <IconElement
                                                  icon={item.icon}
                                                  className="text-white/60 group-hover:text-white" />
                                             <span className="text-xs font-medium text-white/80 mt-1 group-hover:text-white">
                                                  {item.title}
                                             </span>
                                        </div>
                                   </li>
                              ))}
                         </div>
                         <div className="flex flex-col gap-y-3 w-full items-start">
                              <h2 className="text-primary text-xs font-light">Information</h2>
                              {informations.map((item, index) => (
                                   <li key={index}
                                        className="flex items-center justify-start
                                   hover:bg-white/10 rounded-md cursor-pointer group w-full
                                   transition-all duration-300 ease-in-out">
                                        <div className="p-2 flex items-center justify-start gap-x-2">
                                             <IconElement
                                                  icon={item.icon}
                                                  className="text-white/60 group-hover:text-white" />
                                             <span className="text-xs font-medium text-white/80 mt-1 group-hover:text-white">
                                                  {item.title}
                                             </span>
                                        </div>
                                   </li>
                              ))}
                         </div>
                    </ul>
               </div>
          </>
     )
}

export default DrawerLayout
