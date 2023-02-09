import React from "react";
import  {Link}  from  'react-router-dom'
import './Navbar.css'

function Navbar(props){
      return(
        <nav className="navbar"> 
            <Link  to="/" style={{color:"#dde1e7"}}><span className="material-symbols-outlined">home</span> </Link>
            <Link  to="/home" style={{color:"#dde1e7"}} ><span className="material-symbols-outlined">groups</span></Link>
            {/* <img  src={props.user.picture}/>
            <h3>{props.user.name}</h3>
            <h2>{process.env.CLIENT_ID}</h2>  */}
        </nav>
      )
}

export default Navbar

{/* */}