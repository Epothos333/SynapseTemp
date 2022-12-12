import React, { useState }from "react";
import { useSelector, useDispatch} from 'react-redux';
import { addMyWords, removeMyWords, addMasteredWords, removeMasteredWords } from '../redux/slices/words';


const Test = (()=>{
    const dispatch = useDispatch();//dispatch allows you to use reducers written in a slice
    const myWords = useSelector(state => state.word.myWords);//useSelector() allows access to state variables
    const masteredWords = useSelector(state => state.word.masteredWords);
    const [addWord, addChange] = useState("");
    const [removeWord, removeChange] = useState("");
    const [addMastered, addChangeMastered] = useState("");
    const [removeMastered, removeChangeMastered] = useState("");
    const handleAddMyWord = () => {
        dispatch(addMyWords(addWord));
    }
    const handleRemoveMyWord = () => {
        dispatch(removeMyWords(removeWord));
    }
    const handleAddMasteredWord = () => {
        dispatch(addMasteredWords(addMastered));
    }
    const handleRemoveMasteredWord = () => {
        dispatch(removeMasteredWords(removeMastered));
    }
    return (
        <div>
            <h1>Testing Your Words!</h1>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div>
                    <h3>Word List</h3>
                    <ul>
                        {myWords.map((e,i)=>{ return <li key={i}>{e}</li>})}
                    </ul>
                </div>
                <div>
                    <h3>Mastered Words</h3>
                    <ul>
                        {masteredWords.map((e,i)=>{ return <li key={i}>{e}</li>})}
                    </ul>
                </div>
            </div>
            <h5>Word List</h5>
            <input type="text" value={addWord} onChange={(e) => addChange(e.target.value)}/> 
            <button onClick={handleAddMyWord}>Add Word to list</button><br/>
            <input type="text" value={removeWord} onChange={(e) => removeChange(e.target.value)}/> 
            <button onClick={handleRemoveMyWord}>Remove Word from list</button><br/><br/>

            <h5>Mastered Words</h5>
            <input type="text" value={addMastered} onChange={(e) => addChangeMastered(e.target.value)}/> 
            <button onClick={handleAddMasteredWord}>Add Word to mastered</button><br/>
            <input type="text" value={removeMastered} onChange={(e) => removeChangeMastered(e.target.value)}/> 
            <button onClick={handleRemoveMasteredWord}>Remove Word from mastered</button>
        </div>
    );
});

export default Test;