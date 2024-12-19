import React from "react";
import { IconType } from "react-icons";
import IconElement from "../elements/IconElement";

export interface DrawerItemConfig {
     icon: IconType
     title: string
     onClick?: () => void | React.MouseEventHandler<HTMLButtonElement>
}

interface DrawerItemsProps {
     drawerItems: DrawerItemConfig[]
}

const DrawerItems: React.FC<DrawerItemsProps> = ({
     drawerItems
}) => {

     return (
          <>
               {drawerItems.map((item, index) => (
                    <li key={index}
                         className="flex items-center justify-start
                                   hover:bg-white/10 rounded-md cursor-pointer group w-full
                                   transition-all duration-300 ease-in-out">
                         <button
                              onClick={item.onClick}
                              className="p-2 flex items-center justify-start gap-x-2">
                              <IconElement
                                   icon={item.icon}
                                   className="text-white/60 group-hover:text-white" />
                              <span className="text-xs font-medium text-white/80 mt-1 group-hover:text-white">
                                   {item.title}
                              </span>
                         </button>
                    </li>
               ))}
          </>
     );
}

export default DrawerItems;