import './App.css';
import Home from './pages/Home';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import UserDetails from './pages/User';
import LandingPage from './pages/LandingPage'
import Albums from './pages/Albums';
import Photo from './pages/Photo';
import Navbar from './pages/Navbar';
import PrivateRoute from './PrivateRoute/Index';

class  App extends React.Component{
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
        <Route  path="/home"  element={
             <Home />
         }/>
        <Route  path="user/:id"  element={<UserDetails />}/>
        <Route  path="album/:id"  element={<Albums />}  />
        <Route   path="photo/:id"  element={<Photo />}/>
    </Routes>
    </div>
  );
}
}
export default App;
