import React from "react";
import { useAppSelector } from "../../redux/hooks";

interface ContentWrapperProps {
     children: React.ReactNode
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
     const isDrawerOpen = useAppSelector(state => state.drawer.isOpen)

     return (
          <div className={`pt-20 transition-all duration-300 ease-in-out
          ${isDrawerOpen ? 'ml-20 md:ml-[10rem]' : 'ml-0 md:ml-44'}`}>
               <div className="p-4 md:p-6 lg:p-8 min-h-screen">
                    {children}
               </div>
          </div>
     );
}

export default ContentWrapper;