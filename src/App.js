import './App.css';
import Doggo from './components/Test';
import { useState } from 'react';

function App() {
  const [hasCarrots, sethasCarrots] = useState(false)

  const triggerApplesCb = () => {
    sethasCarrots(!hasCarrots)
  }

  return (
    <>
      <p>Johnny has an apple? {hasCarrots.toString()}</p>
      <Doggo initialCounter={9} appleCb={triggerApplesCb} />
    </>
  );
}

export default App;
