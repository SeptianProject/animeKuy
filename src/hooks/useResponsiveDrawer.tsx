import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/hooks'
import { toggleDrawer } from '../redux/slices/drawerSlice'

const useResponsiveDrawer = () => {
     const dispatch = useDispatch()
     const isDrawerOpen = useAppSelector(state => state.drawer.isOpen)

     React.useEffect(() => {
          const checkScreenSize = () => {
               if (window.innerWidth >= 768 && isDrawerOpen) {
                    dispatch(toggleDrawer())
               }
          }
          checkScreenSize()

          window.addEventListener('resize', checkScreenSize)
          return () => window.removeEventListener('resize', checkScreenSize)
     }, [dispatch, isDrawerOpen])
}

export default useResponsiveDrawer