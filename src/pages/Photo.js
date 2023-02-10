import React  from 'react'
import { useParams} from 'react-router-dom';
import './Photo.css'
import Navbar from "./Navbar";

function Photo(props){
      let { id } = useParams();
    let photo = props.photos.find(photo => photo.id === parseInt(id));
    return(
        <div>
              <Navbar   style={{width:"100vw"}}/>
        <div className='photo'>
               <h1>{photo.title}</h1>
                <img  src={photo.url}  className="image"/>
                <input  value={photo.title}  onChange={(e)=>props.handleTitleChange(e,parseInt(id))}/>
                <button  onClick={()=>props.updateUser(id)}  className="button">Update</button>
        </div>
        </div>
    )

}


export default Photo;