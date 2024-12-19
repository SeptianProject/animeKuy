import React from "react";

interface ContentWrapperProps {
     children: React.ReactNode
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {

     return (
          <div className={`pt-20 transition-all duration-300 ease-in-out md:pl-40`}>
               <div className="p-4 md:p-6 lg:p-8 min-h-screen">
                    {children}
               </div>
          </div>
     );
}

export default ContentWrapper;