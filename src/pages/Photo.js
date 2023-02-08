import React  from 'react'
import { useParams} from 'react-router-dom';

function Photo(props){
      let { id } = useParams();
    let photo = props.photos.find(photo => photo.id === parseInt(id));
    return(
        <div>
                <input  value={photo.title}  onChange={(e)=>props.handleTitleChange(e,parseInt(id))}/>
                <button  onClick={()=>props.updateUser(id)}>Update</button>
        </div>
    )
}


export default Photo;