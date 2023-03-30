import React from "react";
import { useParams } from 'react-router-dom';
import  {Link}  from  'react-router-dom'
import './User.css'
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function UserDetails() { 
  let users= useSelector(elem=>elem.users[0])
  let albums = useSelector(elem=>elem.albums[0])
    let { id } = useParams();
    let user = users.find(user => user.id === parseInt(id));
    let albumsPerUser = albums.filter(albumUser => albumUser.userId ===parseInt(id))
     if(users && albums){
    return (
      <div>
        <Navbar/>
        <h2>{user.name}'s Albums</h2>
          <ol  className="square">
           {albumsPerUser.map(album=>
           <li key={album.id}>
           <Link  to={`/album/${album.id}`}> 
                {album.title}
            </Link>
            </li>
           )}    
          </ol>
      </div>
    );
  }
  return (
    <h3>Loading ...</h3>
  )
  }

export default UserDetails


