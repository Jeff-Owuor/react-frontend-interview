import React from "react";
import  {Link}  from  'react-router-dom'
import './Navbar.css'

function Navbar(props){
      return(
        <nav className="navbar" style={{height:"8vh"}}> 
            <div>
                <Link  to="/" style={{color:"#dde1e7",margin:"10px"}}><span className="material-symbols-outlined">home</span> </Link>
                <Link  to="/home" style={{color:"#dde1e7",margin:"10px"}} ><span className="material-symbols-outlined">groups</span></Link>
              </div>
            {props.user &&
                <div>
                      <img  src={props.user.picture} className=" rounded-circle img-fluid max-width: 100%;"  style={{height:"7vh"}}/>
                </div>
            }
            
        </nav>
      )
}

export default Navbar

{/* */}