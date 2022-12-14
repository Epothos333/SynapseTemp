import React, { useState }from "react";
import { useSelector} from 'react-redux';
import styles from './StudentTestStyle'
import { Link } from "react-router-dom";
import speaker from '../assets/speaker.png'
//import { addMyWords, removeMyWords, addMasteredWords, removeMasteredWords } from '../redux/slices/words';

const Test = (()=>{
    const [spellingInput, setSpellingInput] = useState("");
    const [questionIndex, setQuestionIndex] = useState(0);
    const [studentSpellings, setStudentSpellings] = useState({});
    const myWords = useSelector(state => state.word.myWords);

    const hearWord = () => {
        const wordAudio = require("../assets"+ myWords[questionIndex].audio);
        new Audio(wordAudio).play();
    }
    const handleNextQuestion = () => {
        let tempSpellings = {...studentSpellings};
        tempSpellings[myWords[questionIndex].word]=spellingInput;
        setStudentSpellings(tempSpellings);
        console.log(studentSpellings);
        setQuestionIndex(questionIndex+1);
        setSpellingInput("");
    }
    return (
        questionIndex<myWords.length?
        <div style={styles.testContainer}>
            <h1 style={styles.header}>Welcome to your Spelling Safari test</h1>
            <div style={styles.questionContainer}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button onClick={hearWord} style={styles.audioButton}>
                        <img src={speaker} alt="speaker" style={styles.image}></img>
                        Play Audio
                    </button>
                    <p><strong>Question {questionIndex+1}</strong></p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <input type="text" placeholder="spell the word you hear" value={spellingInput} onChange={(e)=>{setSpellingInput(e.target.value)}} style={styles.spellingInput}></input>
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