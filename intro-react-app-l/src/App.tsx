import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/misc/MyuseStateExample";
import Content from "./components/misc/Content";
import Footer from "./components/misc/Footer";
import Alert from "./components/misc/Alert";
import Buttons from "./components/misc/Buttons";
import Counter from "./components/Counter/Counter";
import { BsCalendarDateFill } from "react-icons/bs";
import { useState } from "react";
import Message from "./Message";
import NavBar from "./components/NavBar";
import Cart from "./components/misc/Cart";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];
  let cars = [
    "Honda",
    "Toyota",
    "Lexus",
    "Volkswagen",
    "Ford",
    "Porsche",
    "Cadillac",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick1 = () => {
    console.log("tClicked from our helper function");
  };
  const handleClick2 = () => {
    setAlertVisibile(!alertVisibile);
  };
  const handleClick3 = () => {
    setIsVisibile(true);
    console.log(isVisibile);
  };

  let count = 0;
  const handleAgainClick = () => {
    count++;
    console.log(count);
  };

  const handleClose = () => {
    setAlertVisibile(false);
  };

  const [alertVisibile, setAlertVisibile] = useState(false);
  const [isVisibile, setIsVisibile] = useState(false);

  // const [firstName, setFirstName] = useState("Jose");
  // const [lastName, setLastName] = useState("Martinez");

  // const fullName = firstName + " " + lastName;

  // use a useState and pass it in an object as the initial state

  const [person, setPerson] = useState({
    firstName: "Jose",
    lastName: "Martinez",
  });

  // learn how to update a object in our useState
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 8,
  });

  // Create a function to update the price of our drink object in our useState
  const handleDrink = () => {
    const newDrink = {
      title: drink.title,
      price: 10,
    };
    setDrink(newDrink);
    console.log(drink);
  };

  // create a useState with nested objects and update a value
  const [customer, setCustomer] = useState({
    name: "Jose",
    address: {
      city: "Stockton",
      zipCode: 94402,
    },
  });

  // Create a function to handle updating a nested object, updating the zip code: 95212
  const handleCustomer = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 95212 },
    });
  };


  // How to update an Array_____________________________________________________________________
  // Create a useState to hold two strings in an Array
  const [tags, setTags] = useState(['happy ','cheer ']);

  // Create a helper function to add to our array with javascript
  const handleArray = () => {
    // tags.push('excite ');
    setTags([...tags,'exciting ']);
    console.log(tags);
  }

// Lets create a helper function to delete happy from this Array

const handleDelete = () => {
  console.log(tags);
  setTags(tags.filter(tag => tag !== 'happy '));
  console.log(tags);
}

// Lets create a helper function to update 'happy ' to 'happiness '

const handleUpdate = () => {
  setTags(tags.map(tag => tag == 'happy ' ? 'happiness ' : tag))
  console.log(tags);
}

// Lets do an update of an Array of objects

// Create a useState this useState will have an Array of objects
const [bugs, setBugs] = useState([
  {id:1,title:'Bug 1',fixed:false},
  {id:2,title:'Bug 2',fixed:false},
  {id:3,title:'Bug 3',fixed:false}
]);

// Need a helper function to help us update this Array of objects, we want to change fixed from false to true using the id
const handleBug = () => {
  setBugs(bugs.map(bug => bug.id == 1 ? {...bug, fixed: true} : bug ))
}



//How to Share state with other components_____________________________________________________________________


//use state that is going to be shared with our nav component and our cart component
const [cartItem, setCartItem] = useState(['Product 1 ', 'Product 2 ', 'Product 3 ','Product 4']);


// Create a helper function to reset our cartItems
const resetCart = () => {
  setCartItem([])
}

  // return <div><Message/></div>
  return (
    <>
    <NavBar cartItemCount={cartItem.length}/>
    <Cart onReset={resetCart} cartItems={cartItem}/>
    
      <div>
        {/* <Message/>
      <Message/>
      <Message/> */}
        <BsCalendarDateFill color="red" size={80} />
        {alertVisibile ? (
          <Alert onClose={handleClose}>Passing in text as a child Alert!</Alert>
        ) : null}
        <Buttons onClickFunction={handleCustomer}>
          Customer Update Button
        </Buttons>

        <Buttons onClickFunction={handleBug}>Update Bug Button</Buttons>
        {bugs.map(bug => <p key={bug.id}>{bug.id} {bug.fixed ? 'fixed' : 'New'}</p>)}

        <Buttons onClickFunction={handleUpdate}>Array Update Button</Buttons>
        <Buttons onClickFunction={handleArray}>Array Add Button</Buttons>
        <Buttons onClickFunction={handleDelete}>Array Delete Button</Buttons>
        <span>{tags}</span>
        <span>{customer.address.zipCode}</span>
        <Buttons onClickFunction={handleDrink}>Drink Update</Buttons>
        <span>{drink.price}</span>
        <Buttons onClickFunction={handleAgainClick}>Count Example</Buttons>
        <Buttons color="secondary" onClickFunction={handleClick2}>
          Alert Button
        </Buttons>
        <Buttons color="warning" onClickFunction={handleClick3}>
          Visibile Button
        </Buttons>
        <Buttons color="info" onClickFunction={handleClick3}>
          four button
        </Buttons>{" "}
        {person.firstName} {person.lastName}
        <Counter />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={items}
          heading="Cities"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={students}
          heading="Students List"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={cars}
          heading="Cars List"
        />
      </div>
      <div>
        <MyuseStateExample />
      </div>
      {/* <div><Footer/></div> */}
    </>
  );
}
export default App;
