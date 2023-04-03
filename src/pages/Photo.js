import React,{useState}  from 'react'
import { useParams} from 'react-router-dom';
import './Photo.css'
import { useSelector,useDispatch } from 'react-redux';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

function Photo(){
  const navigate = useNavigate();
    let photos = useSelector(elem=>elem.photos[0])
      let { id } = useParams();
    let photo = photos.find(photo => photo.id === parseInt(id));
    const [title, setTitle] = useState(photo.title);
    const dispatch = useDispatch()
    const handleTitleChange = (e) => {
      const newTitle = e.target.value;
      setTitle(newTitle)
    };
    const updateUser = () => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${photo.id}`,
         {
          method:'PATCH',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({title:title})
         })
         .then(response => response.json())
         .then(photo =>dispatch({type:"UPDATE_USER",payload:photo}))
         .catch(error => console.error(error));
  }
  
    if(photos){
    return(
        <div>
              <Navbar   style={{width:"100vw"}}/>
        <div className='photo'>
               <h1>{title}</h1>
                <img  src={photo.url}  className="image"/>
                <input  value={title} onChange={handleTitleChange}/>
                <button  onClick={()=>{
                  updateUser(); 
                  navigate(-1)}}  
                  className="button">
                  Update</button>
        </div>
        </div>
    )
}
  return (
    <h3>Loading ...</h3>
  )
}


export default Photo;