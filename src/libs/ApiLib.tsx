/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

const API_KEY = import.meta.env.VITE_PUBLIC_API_BASE_URL

export const getAnimeResponse = async (resource: string, query?: string) => {
     const response = await axios.get(`${API_KEY}/${resource}?${query}`)
     return response.data.data
}

export const getNestedAnimeResponse = async (resource: string, query: string) => {
     const response = await getAnimeResponse(resource, query)
     return response.flatMap((item: any) => item.entry)
}