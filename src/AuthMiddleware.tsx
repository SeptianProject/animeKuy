
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { loginAuth } from "./redux/slices/loginSlice";
import AuthModal from "./components/layouts/AuthModal";

interface AuthMiddlewareProps {
     children: React.ReactNode
     requiredAuth?: boolean
}

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
     children,
     requiredAuth = true
}) => {
     const [showAuthModal, setShowAuthModal] = React.useState<boolean>(false);
     const isLogin = useSelector((state: RootState) => state.login.isLogin);
     const dispatch = useDispatch();

     useEffect(() => {
          const token = localStorage.getItem('authToken');
          if (token) {
               dispatch(loginAuth())
          } else if (requiredAuth && !isLogin) {
               setShowAuthModal(true)
          }
     }, [dispatch, isLogin, requiredAuth])

     const handleCloseModal = () => {
          if (isLogin) {
               setShowAuthModal(false)
          }
     }

     if (!requiredAuth) {
          return <>{children}</>
     }

     return (
          <>
               {showAuthModal && (
                    <AuthModal
                         isOpen={showAuthModal}
                         onClose={handleCloseModal} />
               )}
               {isLogin && children}
          </>
     )
}

export default AuthMiddleware;