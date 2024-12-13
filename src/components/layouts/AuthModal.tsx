/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginFormSchema, LoginFormSchema, registerFormSchema, RegisterFormSchema } from "../../context/AuthContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { loginAuth, registerAuth } from "../../libs/ApiLib"
import Swal from "sweetalert2"
import AuthLayout from "./AuthLayout"

type AuthMode = 'login' | 'register';

interface AuthModalProps {
     isOpen: boolean
     onClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({
     isOpen,
     onClose
}) => {
     const [authMode, setAuthMode] = React.useState<AuthMode>('login');

     const {
          register,
          handleSubmit,
          reset,
          formState: { errors }
     } = useForm<LoginFormSchema | RegisterFormSchema>({
          resolver: zodResolver(authMode === 'login' ? loginFormSchema : registerFormSchema)
     })

     const loginMutation = useMutation({
          mutationFn: loginAuth,
          onSuccess: (data) => {
               localStorage.setItem('authToken', data.token)
               // email : eve.holt@reqres.in
               // password : cityslicka

               Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil!',
                    text: `Anda berhasil menjadi sigma🐱`,
                    confirmButtonText: 'Senang Sekali',
                    confirmButtonColor: '#3085d6',
               }).then(() => {
                    onClose()
               })
          },
          onError: (error: any) => {
               console.log('error: ', error)
               Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal!',
                    text: error.response?.data?.error || 'Terjadi kesalahan saat login.',
                    confirmButtonText: 'Oke',
                    confirmButtonColor: '#3085d6',
               })
          }
     })

     const registerMutation = useMutation({
          mutationFn: registerAuth,
          onSuccess: (data) => {
               localStorage.setItem('id', data.id)
               localStorage.setItem('authToken', data.token)
               // email: eve.holt@reqres.in
               // password: pistol

               Swal.fire({
                    icon: 'success',
                    title: 'Register Berhasil!',
                    text: `Anda berhasil menjadi sigma🐱`,
                    confirmButtonText: 'Senang Sekali',
                    confirmButtonColor: '#3085d6',
               }).then(() => {
                    onClose()
               })
          },
          onError: (error: any) => {
               console.log('error: ', error)
               Swal.fire({
                    icon: 'error',
                    title: 'Register Gagal!',
                    text: error.response?.data?.error || 'Terjadi kesalahan saat register.',
                    confirmButtonText: 'Oke',
                    confirmButtonColor: '#3085d6',
               })
          }
     })

     const toggleAuthMode = () => {
          setAuthMode(authMode === 'login' ? 'register' : 'login')
          reset()
     }

     const onSubmit: SubmitHandler<LoginFormSchema | RegisterFormSchema> = (data) => {
          if (authMode === 'login') {
               loginMutation.mutate(data as LoginFormSchema)
          } else {
               registerMutation.mutate(data as RegisterFormSchema)
          }
          console.log('email: ', data.email)
          console.log('password: ', data.password)
     }

     return (

          <AuthLayout
               authMode={authMode}
               toggleAuthMode={toggleAuthMode}
               isOpen={isOpen}
               onClose={onClose}
               handleSubmit={handleSubmit}
               onSubmit={onSubmit}
               register={register}
               mutation={registerMutation}
               errors={errors}
          />
     )
}

export default AuthModal