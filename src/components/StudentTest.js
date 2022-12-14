import React, { useState }from "react";
import { useSelector, useDispatch} from 'react-redux';
import styles from './StudentTestStyle'
import { Link } from "react-router-dom";
import speaker from '../assets/speakerToo.png'
//import { addMyWords, removeMyWords, addMasteredWords, removeMasteredWords } from '../redux/slices/words';

const Test = (()=>{
    const dispatch = useDispatch();//dispatch allows you to use reducers written in a slice
    const myWords = useSelector(state => state.word.myWords);//useSelector() allows access to state variables
    const [currentSpelling, changeSpelling] = useState("");
    const [testQuestion, incrementQuestion] = useState(0);
    const [testResults, addResult] = useState([]);
    const hearWord = () => {
        //get audio file for the word the user is currently on and play it.

        const wordAudio = require("../assets/"+ myWords[testQuestion]+".mp3");
        new Audio(wordAudio).play();
    }
    const handleNextQuestion = () => {
        incrementQuestion(testQuestion+1);
        addResult([...testResults,currentSpelling]);
        changeSpelling("");
        
    }
    return (
        testQuestion<myWords.length?
        <div style={styles.testContainer}>
            <h1 style={styles.header}>Welcome to your Spelling Safari test</h1>
            <div style={styles.questionContainer}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button onClick={hearWord} style={styles.audioButton}>
                        <img src={speaker} alt="speaker" style={styles.image}></img>
                        Play Audio
                    </button>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <input type="text" placeholder="spell the word you hear" value={currentSpelling} onChange={(e)=>{changeSpelling(e.target.value)}} style={styles.spellingInput}></input>
                    <button onClick={handleNextQuestion} style={styles.submitButton}>Submit Answer</button>
                </div>
            </div>
        </div>:
        <div style={styles.testContainer}>
            <h1 style={styles.header}>You have finished your test</h1>
            <Link style={styles.navLink} to="/">You may return to your Safari Spelling dashboard now</Link>
        </div>
    );
});

export default Test;