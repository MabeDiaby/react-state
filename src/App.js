import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Friends from './Friends';

function App() {

  const [showing, setShowing] = useState(true);
  // setShowing(5)
  return (
    <div className="main">
      <Friends />
      <p style={{ display: showing ? 'none' : '' }}>Can you see me now?</p>
      <button onClick={() => setShowing(!showing)}>Toggle State</button>
    </div>
  );
}

export default App;
