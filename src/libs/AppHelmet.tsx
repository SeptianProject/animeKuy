import React from "react";
import { Helmet } from "react-helmet-async";

interface AppHelmetProps {
     title: string;
     page: JSX.Element
}

const AppHelmet: React.FC<AppHelmetProps> = ({ title, page }) => {
     return (
          <>
               <Helmet>
                    <title>{title} - AnimeKuy</title>
               </Helmet>
               {page}
          </>
     );
}

export default AppHelmet;