import React from "react";
import  '../Home.css'
import  {Link}  from  'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import  UserDetails  from "./UserDetails"

class Home extends React.Component{
    state = {
        users:[],
        albums:[],
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
      .catch(error => console.error(error));

      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => this.setState({ albums }))
      .catch(error => console.error(error));
    }

    render(){
        return(
            <div>
                <ol  className="containerElement">
                            {this.state.users.map(user => (
                           <li key={user.id}>
                           <Link to={`/user/${user.id}`}>{user.name}</Link>
                           </li>
                            ))}
                </ol>
               <Routes>
                   <Route  path="user/:userId"  element={<UserDetails  users={this.state.users}/>}/>
               </Routes>
             </div>
        
        )
    }
}

export default  Home