import React,{useState} from 'react'
import { useParams,Link } from 'react-router-dom';

function Photo(props){
      let { id } = useParams();
    let photo = props.photos.find(photo => photo.id === parseInt(id));
    return(
        <div>
            <form onSubmit={()=>props.updateUser(id)}>
                <input  value={photo.title}  onChange={()=>props.handleTitleChange(parseInt(id))} name="title"/>
                <button>Update</button>
            </form>
        </div>
    )
}


export default Photo;