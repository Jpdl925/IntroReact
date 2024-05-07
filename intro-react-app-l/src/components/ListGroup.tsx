// rafce arrow function
// rfce regular function

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    // items = [];
    const message =  items.length==0 ? <p>No Items found</p> : null; 

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
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
