import React from "react";
import  './Home.css'

export default class Home extends React.Component{
    state = {
        data:[]
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error(error));
    }

    render(){
        return(
            <div  className="containerElement">
                    <ul>
                            {this.state.data.map(item => (
                            <li key={item.id}>{item.name}</li>
                            ))}
                </ul>
          </div>
        )
    }
}