import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import { BsCalendarDateFill } from "react-icons/bs";


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
  

  const handleSelectItem = (item:string) => {
    console.log(item);
  }


  const handleClick1 = () => {
    console.log("tClicked from our helper function");
  }
  const handleClick2 = () => {
    console.log("tClicked from our helper function");
  }
  const handleClick3 = () => {
    console.log("tClicked from our helper function");
  }


  // return <div><Message/></div>
  return (
    <>
      <div>
        <BsCalendarDateFill color="red" size={80}/>

        <Alert>
          Passing in text as a child Alert!
        </Alert>


        <Alert>
          Passing in text as a child Alert part 2!
        </Alert>


        <Buttons   onClickFunction={handleClick1}>
          One Button
        </Buttons>
        <Buttons color="secondary" onClickFunction={handleClick2}>
          Two Button
        </Buttons>
        <Buttons color="danger" onClickFunction={handleClick3}>
          Three Button
        </Buttons>


        <ListGroup onSelectedItem={handleSelectItem} items={items} heading="Cities"/>


        <ListGroup onSelectedItem={handleSelectItem} items={students} heading="Students List"/>


        <ListGroup onSelectedItem={handleSelectItem} items={cars} heading="Cars List"/>


      </div>
      <div>
        <MyuseStateExample />
      </div>
      {/* <div><Footer/></div> */}
    </>
  );
}
export default App;
