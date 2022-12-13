import React, { useState }from "react";
import { useSelector, useDispatch} from 'react-redux';
import { addMyWords, removeMyWords, addMasteredWords, removeMasteredWords } from '../redux/slices/words';

const Test = (()=>{
    const dispatch = useDispatch();//dispatch allows you to use reducers written in a slice
    const myWords = useSelector(state => state.word.myWords);//useSelector() allows access to state variables
    const [currentSpelling, changeSpelling] = useState("");
    const [testQuestion, incrementQuestion] = useState(0);
    const hearWord = () => {
        //get audio file for the word the user is currently on and play it.

        const wordAudio = require("../assets/"+ myWords[testQuestion]+".mp3");
        new Audio(wordAudio).play();
    }
    const handleNextQuestion = () => {
        if(testQuestion<myWords.length-1){
            incrementQuestion(testQuestion+1);
        }
        if(currentSpelling===myWords[testQuestion]){
            console.log("Correct answer");
        }
        else{
            console.log("incorrect answer");
        }
        changeSpelling("");
        
    }
    return (
        <div>
            <h1 style={{margin:'10px', padding:'20px'}}>Welcome to your Spelling Safari test</h1>
            <div id="testQuestionContainer" style={{borderStyle:'solid', margin:'10px', padding:'20px'}}>
                <p>Speaker image here</p>
                <button onClick={hearWord}>Play Audio</button><br/>
                <input type="text" placeholder="spell the word you hear" value={currentSpelling} onChange={(e)=>{changeSpelling(e.target.value)}}></input>
                <button onClick={handleNextQuestion}>Submit Answer</button>
            </div>
        </div>
    );
});

export default Test;