import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words:[
    {id:0, word:"bird", audio:"/bird.mp3"},
    {id:1, word:"baseball", audio:"/baseball.mp3"},
    {id:2, word:"ball", audio:"/ball.mp3"},
    {id:3, word:"therefore", audio:"/therefore.mp3"},
    {id:4, word:"rook", audio:"/rook.mp3"},
    {id:5, word:"arithmetic", audio:"/arithmetic.mp3"},
    {id:6, word:"paint", audio:"/paint.mp3"},
    {id:7, word:"library", audio:"/library.mp3"},
    {id:8, word:"ketchup", audio:"/ketchup.mp3"},
    {id:9, word:"candle", audio:"/candle.mp3"},
    {id:10, word:"eighty", audio:"/eighty.mp3"},
    {id:11, word:"litter", audio:"/litter.mp3"},
    {id:12, word:"mayflower", audio:"/mayflower.mp3"},
    {id:13, word:"average", audio:"/average.mp3"},
    {id:14, word:"discontinue", audio:"/discontinue.mp3"},
    {id:15, word:"perform", audio:"/perform.mp3"},
    {id:16, word:"compare", audio:"/compare.mp3"},
    {id:17, word:"calendar", audio:"/calendar.mp3"},
    {id:18, word:"preach", audio:"/preach.mp3"},
    {id:19, word:"declare", audio:"/declare.mp3"},
    {id:20, word:"relief", audio:"/relief.mp3"},
    {id:21, word:"senate", audio:"/senate.mp3"},
    {id:22, word:"display", audio:"/display.mp3"},
    {id:23, word:"moisture", audio:"/moisture.mp3"},
    {id:24, word:"create", audio:"/create.mp3"},
    {id:25, word:"poem", audio:"/poem.mp3"},
    {id:26, word:"dwell", audio:"/dwell.mp3"},
    {id:27, word:"hinge", audio:"/hinge.mp3"},
    {id:28, word:"intense", audio:"/intense.mp3"},
    {id:29, word:"meter", audio:"/meter.mp3"},
    {id:30, word:"command", audio:"/command.mp3"},
    {id:31, word:"umpire", audio:"/umpire.mp3"},
    {id:32, word:"twilight", audio:"/twilight.mp3"},
    {id:33, word:"rude", audio:"/rude.mp3"},
    {id:34, word:"tiniest", audio:"/tiniest.mp3"},
    {id:35, word:"criminal", audio:"/criminal.mp3"},
    {id:36, word:"jewel", audio:"/jewel.mp3"},
    {id:37, word:"mood", audio:"/mood.mp3"},
    {id:38, word:"growth", audio:"/growth.mp3"},
    {id:39, word:"population", audio:"/population.mp3"}
  ],
  myWords:[
    {id:0, word:"bird", audio:"/bird.mp3"},
    {id:1, word:"baseball", audio:"/baseball.mp3"},
    {id:2, word:"ball", audio:"/ball.mp3"},
    {id:3, word:"therefore", audio:"/therefore.mp3"},
    {id:4, word:"rook", audio:"/rook.mp3"},
    {id:5, word:"arithmetic", audio:"/arithmetic.mp3"},
    {id:6, word:"paint", audio:"/paint.mp3"},
    {id:7, word:"library", audio:"/library.mp3"},
    {id:8, word:"ketchup", audio:"/ketchup.mp3"},
    {id:9, word:"candle", audio:"/candle.mp3"}
  ],
  masteredWords:[
    {id:39, word:"population", audio:"/population.mp3"}
  ],
}

export const wordSlice = createSlice({
  name: 'wordSlice',
  initialState,
  reducers: {
    //action.payload should be in the form {id:39, word:"population", audio:"/population.mp3"}
    addMyWords:(state, action) => {
        state.myWords.push(action.payload);
    },
    removeMyWords:(state,action)=>{
        const newArray = state.myWords.filter((id) => id!==action.payload.id);
        state.myWords = newArray;
    },
    addMasteredWords:(state, action) => {
        state.masteredWords.push(action.payload);
    },
    removeMasteredWords:(state,action)=>{
        const newArray = state.masteredWords.filter((id) => id!==action.payload.id );
        state.masteredWords = newArray;
    },


  },
})
// Action creators are generated for each case reducer function
export const { addMyWords, removeMyWords, addMasteredWords, removeMasteredWords } = wordSlice.actions
export default wordSlice.reducer