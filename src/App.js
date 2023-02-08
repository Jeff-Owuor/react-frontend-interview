import './App.css';
import Home from './pages/Home';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import UserDetails from './pages/User';
import LandingPage from './pages/LandingPage'
import Albums from './pages/Albums';
import Photo from './pages/Photo';


class  App extends React.Component{
        state = {
          users:[],
          albums:[],
          photos:[],
          title:'',
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

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => this.setState({ photos }))
        .catch(error => console.error(error));
    

      }
    componentDidUpdate(){
      window.localStorage.setItem('Users',JSON.stringify(this.state.users))
      window.localStorage.setItem('Albums',JSON.stringify(this.state.albums))
      window.localStorage.setItem('Photos',JSON.stringify(this.state.photos))
    }

      handleChange = (e,id) => {
        this.setState((prevState) => {
          const photos = [...prevState.photos];
          const index = photos.findIndex((photo) => photo.id === id);
          photos[index] = { ...photos[index], title:photos[index].title=e.target.value};
          return { photos };
        });
      };

      updateUser = (photoId) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`,
           {
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state.photos.find(photo => photo.id === parseInt(photoId)))
           })
           .then(response => response.json())
           .then(photo =>this.setState({ photo }))
           .catch(error => console.error(error));
    }
      

  render(){
  return (
    <div className="App">
    <Routes>
        <Route   path="/"  element={<LandingPage/>}></Route>
        <Route  path="/home"  element={<Home  users={JSON.parse(window.localStorage.getItem("Users"))} albums={this.state.albums}/>}/>
        <Route  path="user/:id"  element={<UserDetails  users={JSON.parse(window.localStorage.getItem("Users"))}  albums={JSON.parse(window.localStorage.getItem("Albums"))}/>}/>
        <Route  path="album/:id"  element={<Albums  photos={JSON.parse(window.localStorage.getItem("Photos"))}  albums={JSON.parse(window.localStorage.getItem("Albums"))}/>}  />
        <Route   path="photo/:id"  element={<Photo  photos={JSON.parse(window.localStorage.getItem("Photos"))}  updateUser={this.updateUser}  handleTitleChange={this.handleChange}/>}/>
    </Routes>
    </div>
  );
}
}
export default App;
