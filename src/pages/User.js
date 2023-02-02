import React from "react";
import { useParams } from 'react-router-dom';
import  {Link}  from  'react-router-dom'

function UserDetails(props) {
    let { id } = useParams();
    let user = props.users.find(user => user.id === parseInt(id));
    let albumsPerUser = props.albums.filter(albumUser => albumUser.userId ===parseInt(id))

    return (
      <div>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone:{user.phone}</p>
        <p>Website{user.website}</p>
          <ol>
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


