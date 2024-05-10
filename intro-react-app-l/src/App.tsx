import ListGroup from "./components/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

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
  // return <div><Message/></div>
  return (
    <>
      <div>
        <Alert>
          Passing in text as a child Alert!
        </Alert>
        <Alert>
          Passing in text as a child Alert part 2!
        </Alert>
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
