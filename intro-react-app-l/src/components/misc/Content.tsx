import { useState } from "react";

const Content = () => {
    // Create a function to help us handle another name change
    // Array of our students names as string in this array
    // create a variable that will assist us with a random number to go through our array of names


    const[name, setName] = useState("CodeStack Students");
    const [increase, setIncrease] = useState(0);

  const handleNameChange = () => {
    const names = [
      "David",
      "Alicia",
      "Aaron",
      "Alejandro",
      "Tony",
      "Jeri",
      "Johnny",
      "Julius",
      "Neng",
      "Samuel",
      "Saroeut",
      "Neo",
    ];


    //   Math.random() out puts 0 * 9 we also have to round Math.floor
    // name.length
    // setName(names[insert random variable])
const randomNumber = Math.floor(Math.random() * names.length);
setName(names[randomNumber]);


  };


  const handleClick = () => {
    // Proper way
    setIncrease((prevIncrease) => prevIncrease + 1);

    // Will get bugs
    setIncrease(increase+1);


    console.log("from our increase");
  }
  const handleClick2 = () => {
   console.log(increase);
  }



  return (
    <>
      <main>
        <p>Hello {name} </p>
        <button onClick={handleNameChange}>Change Name!</button>
        <button onClick={handleClick}>Age increased by: {increase}</button>
        <button onClick={handleClick2}>Click Me! 2</button>
      </main>
    </>
  );
};


export default Content;
