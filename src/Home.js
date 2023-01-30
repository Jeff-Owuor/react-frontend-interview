import React from "react";
import  './Home.css'

export default class Home extends React.Component{
    state = {
        users:[]
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
      .catch(error => console.error(error));
    }

    render(){
        return(
                <ol  className="containerElement">
                            {this.state.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                            ))}
                </ol>
             
        
        )
    }
}