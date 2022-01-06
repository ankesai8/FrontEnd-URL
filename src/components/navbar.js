import React, { useContext } from "react";
import{AppContext} from "./context";


function NavBar(){
  const{result } = useContext(AppContext)
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-block">    
  <a className="navbar-brand" href="a" style={{color:"black" , fontWeight:"bolder" , fontSize:"1.5rem"}}>Shortner</a>
 
</nav>
        </>
    )
}

export default NavBar;
