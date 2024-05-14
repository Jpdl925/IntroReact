
interface ButtonProps{
    children:string
    onClickFunction:() => void
    color?/*? makes it Optional*/:string
}


const Buttons = ({children,onClickFunction,color="dark"}:ButtonProps) => {
  return (
    <>
      <button className={`btn btn-${color}`} onClick={onClickFunction}>
        {children}
      </button>
    </>
  );
};

export default Buttons;
