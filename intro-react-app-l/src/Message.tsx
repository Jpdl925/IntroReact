// Functional component
// PascalCasing

// let count = 0 , double counts when outside the function, aka Impure Function, has to be in function to work correctly, aka Pure function

function Message(){
    // Pure function
    let count = 0;
    count++;
    console.log(count);
    // JSX: Javascript XML
    return <h1>Message:{count}</h1>
}

// This export will allow us to use this component where ever we import it
export default Message;