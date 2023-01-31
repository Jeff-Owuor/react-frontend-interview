import React from "react";
import  '../Home.css'
import  {Link}  from  'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <ol  className="containerElement">
                            {this.props.users.map(user => (
                           <li key={user.id}>
                           <Link to={`/user/${user.id}`}>{user.name}</Link>
                           </li>
                            ))}
                </ol>
             </div>
        
        )
    }
}

export default  Home