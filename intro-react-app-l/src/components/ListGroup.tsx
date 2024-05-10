import { useState } from "react";

// Typescript has a feature called interface 
// using an interface we can define the shape of our objects
// {items: [], heading : string}
interface ListProps {
  items: string []
  heading: string
  onSelectedItem:(item:string) => void
}


// rafce arrow function
// rfce regular function

const ListGroup = ({items,heading,onSelectedItem}:ListProps) => {
  

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [name, setName] = useState("David");

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
    console.log(index);
  };

  // let selectedIndex = 0;

  // const arr = useState(0);

  // console.log(arr);

  // console.log(useState(-1));

  // Event handler which is a function to handle an event
  // const handleClick = (e:any) => {
  //   console.log(e);
  // };

  // items = [];

  // const message =  items.length==0 ? <p>No Items found</p> : null;

  const getMessage = () => {
    return items.length == 0 ? <p>No Items found</p> : null;
  };

  // if(items.length ==0 ){
  //   return(
  //   <>

  //   <h1>List</h1>
  //   <p>No Items found</p>
  //   </>
  //   )
  // }

  return (
    // JSX we must have one parent element. Example div,Fragment or <></>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {updateIndex(index)
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={() => setName("Neo")}>
        Update to New name
      </button>
    </>
  );
};

export default ListGroup;
