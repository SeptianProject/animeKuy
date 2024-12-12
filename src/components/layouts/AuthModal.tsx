/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { BiX } from "react-icons/bi"
import InputElement from "../elements/InputElement"
import ButtonElement from "../elements/ButtonElement"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginFormSchema, LoginFormSchema } from "../../context/AuthContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { loginAuth } from "../../libs/ApiLib"
import Swal from "sweetalert2"

interface AuthModalProps {
     isOpen: boolean
     onClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({
     isOpen,
     onClose
}) => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) })

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

     const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
          loginMutation.mutate(data)
          console.log('email: ', data.email)
          console.log('password: ', data.password)
     }

     return (
          <div className={`w-4/5 md:w-1/2 lg:w-1/3 h-[25rem] fixed top-1/2 left-1/2 transform -translate-x-1/2 
               -translate-y-1/2 z-50 bg-secondary border-2 border-white/40 rounded-xl 
               transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`}>
               <div className="pt-20 flex flex-col items-center justify-center space-y-5">
                    <button
                         onClick={onClose}
                         type="button"
                         className="absolute top-3 left-3">
                         <BiX className="size-9" />
                    </button>
                    <h1 className="text-2xl font-semibold">Login Mang😋</h1>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="flex flex-col items-center gap-y-3 h-full w-80">
                         <InputElement
                              {...register('email')}
                              type="email"
                              placeholder="Emailnya gan"
                              error={errors.email}
                         />
                         <InputElement
                              {...register('password')}
                              type="password"
                              placeholder="Password gan"
                              error={errors.password}
                         />
                         <ButtonElement
                              type="submit"
                              text={loginMutation.isPending ? "Loading..." : "Login Kuy"}
                              disabled={loginMutation.isPending}
                              className="text-sm mt-5" />
                    </form>
               </div>
          </div >
     )
}

export default AuthModal