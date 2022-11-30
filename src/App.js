import './App.css';
import Doggo from './components/Test';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [hasCarrots, sethasCarrots] = useState(false)

  const triggerApplesCb = () => {
    sethasCarrots(!hasCarrots)
  }

  return (
    <>
      <p>Johnny has an apple? {hasCarrots.toString()}</p>
      <Doggo initialCounter={9} appleCb={triggerApplesCb} />
      <Link to="/home">Synapse Home Page</Link><br></br>
      <Link to="/about">Synapse About Page</Link>
    </>
  );
}

export default App;
