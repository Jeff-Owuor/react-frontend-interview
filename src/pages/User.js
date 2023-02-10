import React from "react";
import { useParams } from 'react-router-dom';
import  {Link}  from  'react-router-dom'
import './User.css'
import Navbar from "./Navbar";

function UserDetails(props) {
    let { id } = useParams();
    let user = props.users.find(user => user.id === parseInt(id));
    let albumsPerUser = props.albums.filter(albumUser => albumUser.userId ===parseInt(id))

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

export default UserDetails


