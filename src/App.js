import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((current) => current + 1);
  }

  return (
    <div className="App">
      <h3>Chanwoo Yun {counter}</h3>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
