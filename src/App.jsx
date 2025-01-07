import './styles.css';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  // state variable , setter function - inital value
  const [count, setCount] = useState(0);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  console.log('DARK_', isDarkModeOn);

  // let count = 123;
  // console.log('_Count_outer', count);

  function handleClick() {
    // count = count + 1;
    setCount(count + 1);
    // console.log('_Count', count);
  }

  return (
    <div className={isDarkModeOn ? 'counter dark' : 'counter'}>
      <p>You have clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={() => setIsDarkModeOn(!isDarkModeOn)}>Dark Mode</button>
    </div>
  );
}
