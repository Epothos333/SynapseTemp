import './App.css';
import Doggo from './components/Test';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Name from './components/Name';

function App() {
  const [hasCarrots, sethasCarrots] = useState(false)

  const triggerApplesCb = () => {
    sethasCarrots(!hasCarrots)
  }

  useEffect(() => {
    console.log('app')
  }, [])

  return (
    <>
      <Name />
      <p>Johnny has an apple? {hasCarrots.toString()}</p>
      <Doggo initialCounter={9} appleCb={triggerApplesCb} />
      <Link to="/home">Synapse Home Page</Link><br></br>
      <Link to="/about">Synapse About Page</Link>
    </>
  );
}

export default App;
