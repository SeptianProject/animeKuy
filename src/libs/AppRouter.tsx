import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import AppHelmet from './AppHelmet'
import DetailPage from '../components/pages/DetailPage'
import LoadMorePage from '../components/pages/LoadMorePage'
import SearchResult from '../components/pages/SearchResult'
import AuthMiddleware from '../AuthMiddleware'
import BookMarksPage from '../components/pages/BookMarksPage'
import SortPage from '../components/pages/SortPage'
import HistoriesPage from '../components/pages/HistoriesPage'
import ProfilePage from '../components/pages/ProfilePage'
import AboutLayout from '../components/layouts/AboutLayout'

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/"
                    element={<AppHelmet title='Landing' page={<HomePage />} />} />
               <Route path="/about"
                    element={<AppHelmet title='Landing' page={<AboutLayout />} />} />
               <Route path="/detail/:id"
                    element={<AppHelmet title='Detail'
                         page={<AuthMiddleware>
                              <DetailPage />
                         </AuthMiddleware>} />} />
               <Route path="/load-more"
                    element={<AppHelmet title='Load More'
                         page={<AuthMiddleware>
                              <LoadMorePage />
                         </AuthMiddleware>} />} />
               <Route path="/search-result/:keyword"
                    element={<AppHelmet title='Load More'
                         page={<AuthMiddleware>
                              <SearchResult />
                         </AuthMiddleware>} />} />
               <Route path="/alpha-years"
                    element={<AppHelmet title='Sorting'
                         page={<AuthMiddleware>
                              <SortPage />
                         </AuthMiddleware>} />} />
               <Route path="/history"
                    element={<AppHelmet title='Histories'
                         page={<AuthMiddleware>
                              <HistoriesPage />
                         </AuthMiddleware>} />} />
               <Route path="/bookmarks"
                    element={<AppHelmet title='BookMarked'
                         page={<AuthMiddleware>
                              <BookMarksPage />
                         </AuthMiddleware>} />} />
               <Route path="/profile"
                    element={<AppHelmet title='User Profile'
                         page={<AuthMiddleware>
                              <ProfilePage />
                         </AuthMiddleware>} />} />
          </Routes >
     )
}

export default AppRouter