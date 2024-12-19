import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeData } from '../../interface/anime';

interface BookMarkState {
     bookMarked: AnimeData[]
}

const initialState: BookMarkState = {
     bookMarked: []
}

const bookMarkSlice = createSlice({
     name: 'bookMark',
     initialState,
     reducers: {
          addBookMark: (state, action: PayloadAction<AnimeData>) => {
               state.bookMarked.push(action.payload)
          },
          removeBookMark: (state, action: PayloadAction<number>) => {
               state.bookMarked = state.bookMarked.filter(
                    (anime) => anime.mal_id !== action.payload
               )
          }
     }
})

export const { addBookMark, removeBookMark } = bookMarkSlice.actions
export default bookMarkSlice.reducer