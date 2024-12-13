/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { LoginFormSchema } from "../context/AuthContext"

const JIKAN_API_KEY = import.meta.env.VITE_PUBLIC_JIKAN_API_BASE_URL
const REQRES_API_KEY = import.meta.env.VITE_PUBLIC_REQRES_API_BASE_URL

export const getAnimeResponse = async (resource: string, query?: string) => {
     const response = await axios.get(`${JIKAN_API_KEY}/${resource}?${query}`)
     return response.data.data
}

export const getNestedAnimeResponse = async (resource: string, query: string) => {
     const response = await getAnimeResponse(resource, query)
     return response.flatMap((item: any) => item.entry)
}

export const registerAuth = async (data: Pick<LoginFormSchema, 'email' | 'password'>) => {
     const response = await axios.post(`${REQRES_API_KEY}/register/`, data)
     return response.data
}

export const loginAuth = async (data: Pick<LoginFormSchema, 'email' | 'password'>) => {
     const response = await axios.post(`${REQRES_API_KEY}/login/`, data)
     return response.data
}