import { BiFolder, BiX } from "react-icons/bi"
import { BsDatabase, BsGrid, BsStack } from "react-icons/bs"
import IconElement from "../elements/IconElement"
import React from "react"
import { SiAstro } from "react-icons/si"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toggleDrawer } from "../../redux/slices/drawerSlice"

const DrawerLayout = () => {
     const [subdrawerOpen, setSubDrawerOpen] = React.useState(false)
     const isOpen = useAppSelector(state => state.drawer.isOpen)
     const dispatch = useAppDispatch()

     const handleDrawerClose = () => {
          dispatch(toggleDrawer())
          setSubDrawerOpen(false)
     }

     const handleSubDrawerToggle = () => {
          setSubDrawerOpen(!subdrawerOpen)
     }

     return (
          <>
               <div className={`fixed left-0 w-20 h-full z-50 bg-dark border-r 
               border-white/5 transition-all duration-300 ease-in-out
               ${isOpen ? '' : '-translate-x-full md:translate-x-0'}`}>
                    <DrawerBadges
                         handleDrawerClose={handleDrawerClose}
                         handleSubDrawerToggle={handleSubDrawerToggle}
                    />
               </div>
               <div className={`
               fixed bg-secondary w-60 h-full z-30 top-20 border-r border-white/10
               transition-all duration-300 ease-in-out
               ${subdrawerOpen ? 'translate-x-20' : '-translate-x-40 md:translate-x-20'}
               ${isOpen ? '' : '-translate-x-60'}`}>
                    <ul className="p-5 space-y-4">
                         <li className="text-white/80 bg-white/10 py-2 px-4 rounded-lg
                         cursor-pointer transition-all duration-300 ease-in-out">
                              Sort by alphabet
                         </li>
                         <li className="text-white/80 hover:bg-white/10 py-2 px-4 rounded-lg
                         cursor-pointer transition-all duration-300 ease-in-out">
                              Sort by popular
                         </li>
                         <li className="text-white/80 hover:bg-white/10 py-2 px-4 rounded-lg
                         cursor-pointer transition-all duration-300 ease-in-out">
                              Sort by year
                         </li>
                         <li className="text-white/80 hover:bg-white/10 py-2 px-4 rounded-lg
                         cursor-pointer transition-all duration-300 ease-in-out">
                              Sort by haha
                         </li>
                    </ul>
               </div>
          </>
     )
}

export default DrawerLayout


interface DrawerBadgesProps {
     handleDrawerClose: () => void
     handleSubDrawerToggle: () => void
}
const DrawerBadges: React.FC<DrawerBadgesProps> = ({
     handleDrawerClose,
     handleSubDrawerToggle
}) => {

     return (
          <ul className="flex flex-col items-center pt-5 gap-y-5">
               <li className="bg-white/10 p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
                    <IconElement
                         icon={BiX}
                         onClick={handleDrawerClose} />
               </li>
               <li className="bg-primary p-2 rounded-xl">
                    <IconElement icon={SiAstro} />
               </li>
               <li className="hover:bg-white/10 p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
                    <IconElement icon={BiFolder}
                         onClick={handleSubDrawerToggle} />
               </li>
               <li className="hover:bg-white/10 p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
                    <IconElement icon={BsDatabase}
                         onClick={handleSubDrawerToggle}
                    />
               </li>
               <li className="hover:bg-white/10 p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
                    <IconElement icon={BsGrid}
                         onClick={handleSubDrawerToggle}
                    />
               </li>
               <li className="bg-white/10 p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
                    <IconElement icon={BsStack}
                         onClick={handleSubDrawerToggle}
                    />
               </li>
          </ul>
     )
}