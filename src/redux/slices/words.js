import { createSlice } from '@reduxjs/toolkit'

// future feature? myWords = {id:int, word:"", audio:path to audio file from assets folder}
/*
  {id:0, word:"bird", audio:"/assets/bird.mp3"},
  {id:1, word:"baseball", audio:"/assets/baseball.mp3"},
  {id:2, word:"ball", audio:"/assets/ball.mp3"},
  {id:3, word:"therefore", audio:"/assets/therefore.mp3"},
  {id:4, word:"rook", audio:"/assets/rook.mp3"},
  {id:5, word:"arithmetic", audio:"/assets/arithmetic.mp3"},
  {id:6, word:"paint", audio:"/assets/paint.mp3"},
  {id:7, word:"library", audio:"/assets/library.mp3"},
  {id:8, word:"ketchup", audio:"/assets/ketchup.mp3"},
  {id:9, word:"candle", audio:"/assets/candle.mp3"}
  
*/
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

