import { useState } from "react";
import styles from "./Counter.module.css";

// This is our Counter component with a return and an export default
const Counter = () => {
  //   We need a use state
  const [counter, setCounter] = useState(0);
  // two functions: one to handle our increment and one to handle our decrement
  const handleIncrement = () => {
      setCounter((prevCount) => prevCount + 1);
      console.log(counter);
    }
  const handleDecrement = () => {
    // Do a quick check if counter is greater than 0 decrease by 1
    if (counter > 0) {
      setCounter((prevCount) => prevCount - 1);
      console.log(counter);
    }
  };

  return (
    <>
      {/* two buttons: one to increment and one to decrement */}
      <button className={styles['btnSecondary']} onClick={handleDecrement}>-</button> 
      <span>{counter}</span>
      <button className={styles['btnPrimary']} onClick={handleIncrement}>+</button>
      {/* render the count somewhere */}
    </>
  );
};

export default Counter;
