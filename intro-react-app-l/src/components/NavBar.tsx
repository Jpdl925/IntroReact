interface navProps{
    cartItemCount:number;
}


const NavBar = ({cartItemCount}:navProps) => {
  return (
    <>
    
    <p>
        NavBar: {cartItemCount}
    </p>

    </>
  )
}

export default NavBar