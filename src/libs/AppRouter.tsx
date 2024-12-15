import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import AppHelmet from './AppHelmet'
import DetailPage from '../components/pages/DetailPage'
import LoadMorePage from '../components/pages/LoadMorePage'

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/"
                    element={<AppHelmet title='Landing' page={<HomePage />} />} />
               <Route path="/detail/:id"
                    element={<AppHelmet title='Detail' page={<DetailPage />} />} />
               <Route path="/load-more"
                    element={<AppHelmet title='Load More' page={<LoadMorePage />} />} />
          </Routes>
     )
}

export default AppRouter