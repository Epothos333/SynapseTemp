import { createSlice } from '@reduxjs/toolkit'

// future feature? myWords = {id:int, word:"", audio:path to audio file}
const initialState = {
  words:[],
  myWords:["bird","baseball","ball","therefore","rook","arithmetic","paint","library","ketchup","candle"],
  masteredWords:["balloon"],

}

export const wordSlice = createSlice({
  name: 'wordSlice',
  initialState,
  reducers: {
    addMyWords:(state, action) => {
        state.myWords.push(action.payload);
    },
    removeMyWords:(state,action)=>{
        //state.myWords.filter((word)=> word!==action.payload );
        const newArray = state.myWords.filter((word)=> word!==action.payload);
        state.myWords = newArray;
    },
    addMasteredWords:(state, action) => {
        state.masteredWords.push(action.payload);
    },
    removeMasteredWords:(state,action)=>{
        const newArray = state.masteredWords.filter((word)=> word!==action.payload );
        state.masteredWords = newArray;
    },


  },
})
//if filter() doesn't work
//const newArr = array.filter()
//state.array = newArr

// Action creators are generated for each case reducer function
export const { addMyWords, removeMyWords, addMasteredWords, removeMasteredWords } = wordSlice.actions

export default wordSlice.reducer

