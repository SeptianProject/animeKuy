/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors, SubmitErrorHandler, SubmitHandler, UseFormRegister } from "react-hook-form";
import ButtonElement from "../elements/ButtonElement";
import InputElement from "../elements/InputElement";
import React from "react";
import { UseMutationResult } from "@tanstack/react-query";
import { BiX } from "react-icons/bi";

type AuthMode = 'login' | 'register';

interface AuthLayoutProps {
     handleSubmit: (onValid: SubmitHandler<{
          email: string;
          password: string;
          confirmPassword?: string;
     }>, onInvalid?: SubmitErrorHandler<{
          email: string;
          password: string;
          confirmPassword?: string;
     }> | undefined) => (e?: React.BaseSyntheticEvent) => Promise<void>
     onSubmit: SubmitHandler<{
          email: string;
          password: string;
          confirmPassword?: string;
     }>
     register: UseFormRegister<{
          email: string;
          password: string;
          confirmPassword?: string;
     }>
     errors: FieldErrors<{
          email: string;
          password: string;
          confirmPassword?: string;
     }>
     mutation: UseMutationResult<any, any, Pick<{
          email: string;
          password: string;
          confirmPassword?: string;
     }, "email" | "password" | "confirmPassword">, unknown>
     onClose: () => void
     isOpen: boolean
     authMode: AuthMode
     toggleAuthMode: () => void
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
     handleSubmit,
     onSubmit,
     register,
     errors,
     mutation,
     onClose,
     isOpen,
     authMode,
     toggleAuthMode
}) => {

     return (
          <div className={`w-4/5 md:w-1/2 lg:w-1/3 fixed top-1/2 left-1/2 transform -translate-x-1/2 
               -translate-y-1/2 z-50 bg-secondary border-2 border-white/40 rounded-xl 
               transition-all duration-300
               ${authMode === 'login' ? 'h-[25rem]' : 'h-[30rem]'}
               ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
               <div className={`pt-12 flex flex-col items-center justify-center space-y-5
                    transition-all duration-500 ease-in-out`}>
                    <button
                         onClick={onClose}
                         type="button"
                         className="absolute top-3 left-3">
                         <BiX className="size-9" />
                    </button>
                    <h1 className="text-2xl font-semibold">
                         {authMode === 'login' ? 'Login' : 'Register'} Mang😋
                    </h1>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="flex flex-col items-center gap-y-3 h-full w-96">
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
                         {authMode === 'register' && (
                              <InputElement
                                   {...register('confirmPassword')}
                                   type="password"
                                   placeholder="Konfirmasi Password gan"
                                   error={errors.confirmPassword}
                              />
                         )}
                         <ButtonElement
                              type="submit"
                              text={mutation.isPending
                                   ? (authMode === 'login' ? "Loading Login..." : "Loading Register...")
                                   : (authMode === 'login' ? "Login Kuy" : "Register Kuy")
                              }
                              disabled={mutation.isPending}
                              className="text-sm mt-5" />
                         <div className="text-sm mt-3">
                              {authMode === 'login' ? (
                                   <span>
                                        Belum punya akun? {' '}
                                        <button
                                             type="button"
                                             onClick={toggleAuthMode}
                                             className="text-blue-500 hover:underline">
                                             Register
                                        </button>
                                   </span>
                              ) : (
                                   <span>
                                        Sudah punya akun? {' '}
                                        <button
                                             type="button"
                                             onClick={toggleAuthMode}
                                             className="text-blue-500 hover:underline">
                                             Login
                                        </button>
                                   </span>
                              )}
                         </div>
                    </form>
               </div>
          </div >
     );
}

export default AuthLayout;