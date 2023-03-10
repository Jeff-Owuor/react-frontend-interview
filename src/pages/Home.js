import React from "react";
import  './Home.css'
import  {Link}  from  'react-router-dom'
import Navbar from "./Navbar";

class Home extends React.Component{
    render(){
        return(
            <div>
            <Navbar style={{width:"100vw"}}/>
            <div className="container">
            <h1>Users list</h1>
            <div className="row  mt-5">
                            {this.props.users.map(user => (
                           <div className="card mt-2 mb-2  mx-3 cardWrap" style={{width: "18rem"}} key={user.id}>
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={`/user/${user.id}`} style={{color:"black",textDecoration:"none"}}>{user.username}'s  User  Card</Link></h5>
                                    <p>Name:<Link to={`/user/${user.id}`} style={{color:"black",textDecoration:"underline"}}>{user.name}</Link> </p>
                                    <p>Email: {user.email}</p>
                                    <p>Phone:{user.phone}</p>
                                    <h3 className="card-subtitle mb-2 text-muted">Albums~{this.props.albums.filter(albumUser=>albumUser.userId===user.id).length}</h3>
                                </div>
                                </div>

                            ))}
                
                </div>
             </div>
             </div>
        )
    }
}

export default  Home

//good background for this page : https://media.istockphoto.com/id/930427714/photo/abstract-geometric-background-in-pastel-trend-colors-with-notebook.jpg?s=612x612&w=0&k=20&c=oUqwqZ5deA5GMWWadY0BRKdlbUW1S3zXC_x52R2W8i8=