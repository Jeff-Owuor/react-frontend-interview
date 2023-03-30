import React  from 'react'
import { useParams} from 'react-router-dom';
import './Photo.css'
import { useSelector } from 'react-redux';
import Navbar from "./Navbar";

function Photo(){
    let photos = useSelector(elem=>elem.photos[0])
      let { id } = useParams();
    let photo = photos.find(photo => photo.id === parseInt(id));
    if(photos){
    return(
        <div>
              <Navbar   style={{width:"100vw"}}/>
        <div className='photo'>
               <h1>{photo.title}</h1>
                <img  src={photo.url}  className="image"/>
                {/* <input  value={photo.title}  onChange={(e)=>props.handleTitleChange(e,parseInt(id))}/>
                <button  onClick={()=>props.updateUser(id)}  className="button">Update</button> */}
        </div>
        </div>
    )
}
  return (
    <h3>Loading ...</h3>
  )
}


export default Photo;