import React from "react";
import  {Link}  from  'react-router-dom'
import './Navbar.css'

function Navbar(props){
      return(
        <nav className="navbar" style={{height:"8vh"}}> 
            <Link  to="/" style={{color:"#dde1e7"}}><span className="material-symbols-outlined">home</span> </Link>
            {props.user &&
                <div>
                     <Link  to="/home" style={{color:"#dde1e7"}} ><span className="material-symbols-outlined">groups</span></Link>
                      <img  src={props.user.picture} class=" rounded-circle img-fluid max-width: 100%;"  style={{height:"7vh"}}/>
                </div>
            }
            
        </nav>
      )
}

export default Navbar

{/* */}