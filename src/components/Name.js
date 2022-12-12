import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setName } from "../redux/slices/user";

const Name = () => {
  const nameFromStore = useSelector(state => state.user.name)
  const [inputVal, setInputVal] = useState(nameFromStore)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(setName(inputVal))
  }

  return (
    <div style={{ padding: '30px' }}>
      <input
        value={inputVal}
        placeholder={'what is your name'}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleOnClick}>Submit</button>
      <p>My name in app state is: {nameFromStore}</p>
    </div>
  );
};

export default Name;