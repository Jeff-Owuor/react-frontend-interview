import React from "react";
import  './Home.css'
import  {Link}  from  'react-router-dom'
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

 function Home(){
    let users= useSelector(elem=>elem.users[0])
    
    let albums = useSelector(elem=>elem.albums[0])
    if(users && albums){
        return(
            <div>
            <Navbar style={{width:"100vw"}}/>
            <div className="container">
            <h1>Users list</h1>
            <div className="row  mt-5">
                            {users.map(user => (
                           <div className="card mt-2 mb-2  mx-3 cardWrap" style={{width: "18rem"}} key={user.id}>
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={`/user/${user.id}`} style={{color:"black",textDecoration:"none"}}>{user.username}'s  User  Card</Link></h5>
                                    <p>Name:<Link to={`/user/${user.id}`} style={{color:"black",textDecoration:"underline"}}>{user.name}</Link> </p>
                                    <p>Email: {user.email}</p>
                                    <p>Phone:{user.phone}</p>
                                    <h3 className="card-subtitle mb-2 text-muted">Albums~{albums.filter(albumUser=>albumUser.userId===user.id).length}</h3>
                                </div>
                                </div>

                            ))}
                
                </div>
             </div>
             </div>
        )
    }
    return (
        <h3>Loading ...</h3>
    )
    }
export default  Home

