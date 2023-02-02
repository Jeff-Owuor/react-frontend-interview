import  React  from 'react'
import { useParams } from 'react-router-dom';

function Albums (props){
    let { id } = useParams();
    let album = props.albums.find(album => album.id === parseInt(id));
    let photosPerAlbum = props.photos.filter(album => album.albumId ===parseInt(id))
    return (
        <div>
            <h2>{album.title}</h2>
            <ol>
                {photosPerAlbum.map(photo => 
                     <li key={photo.id}>
                     <img  src={photo.thumbnailUrl}/>
                     </li>
            
                )}
            </ol>
        </div>
    )
}

export default Albums;