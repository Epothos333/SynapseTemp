import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const [counter, setCounter] = useState(0)
  const [dog, setd] = useState(0)
  const [cat, setc] = useState(0)

  useEffect(() => {
    // some actions
    console.log('use effectt triggered', dog)
  }, [])

  return (
    <div>
      <Link to="/">Back to Johnny's apples</Link>
      <h1>Welcome to Synapse</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(p => p + 1)}>count</button>
    </div>
  );
}

export default Home;