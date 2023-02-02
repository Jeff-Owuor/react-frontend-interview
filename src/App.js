import './App.css';
import Home from './pages/Home';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import UserDetails from './pages/User';
import LandingPage from './pages/LandingPage'


class  App extends React.Component{
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
  return (
    <div className="App">
    <Routes>
        <Route  path="/home"  element={<Home  users={this.state.users}/>}/>
        <Route  path="user/:id"  element={<UserDetails  users={this.state.users}  albums={this.state.albums}/>}/>
        <Route   path="/"  element={<LandingPage/>}></Route>
    </Routes>
    </div>
  );
}
}
export default App;
