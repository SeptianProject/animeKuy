import { Helmet } from 'react-helmet-async'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Detail from '../components/pages/Detail'
import Home from '../components/pages/Home'


const routes = createBrowserRouter(
     createRoutesFromElements(
          <>
               <Route path="/"
                    element={
                         <>
                              <Helmet>
                                   <title>AnimeKuy - Landing</title>
                              </Helmet>
                              <Home />
                         </>
                    } />
               <Route path="/detail/:id"
                    element={
                         <>
                              <Helmet>
                                   <title>AnimeKuy - Detail</title>
                              </Helmet>
                              <Detail />
                         </>
                    } />
          </>
     ), {
     future: {
          v7_relativeSplatPath: true,
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_skipActionErrorRevalidation: true,
     }
}
)

export default routes