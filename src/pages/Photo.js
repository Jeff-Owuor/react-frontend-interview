import React,{useState} from 'react'
import { useParams,Link } from 'react-router-dom';

function Photo(props){
      let { id } = useParams();
    let photo = props.photos.find(photo => photo.id === parseInt(id));
    const [photoUpdate,setPhotoUpdate] = useState(photo)
    const updateUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,
           {
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(photoUpdate)
           })
           .then(response => response.json())
           .then(photo => setPhotoUpdate({ photo }))
           .catch(error => console.error(error));
    }
    return(
        <div>
            <form>
                <input  value={photoUpdate.title}  onChange={(e)=>{setPhotoUpdate(e.target.value)}} name="title"/>
                <button>Update</button>
            </form>
        </div>
    )
}


export default Photo;