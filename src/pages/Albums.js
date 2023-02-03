import  React  from 'react'
import { useParams } from 'react-router-dom';

function Albums (props){
    let { id } = useParams();
    let album = props.albums.find(album => album.id === parseInt(id));
    let photosPerAlbum = props.photos.filter(album => album.albumId ===parseInt(id))
    return (
        <div  className='container'>
            <h2>{album.title}</h2>
            <div className='row'>
                {photosPerAlbum.map(photo => 
                     <div  className="col-md-3 col-lg-3 col-sm-4 mb-2" key={photo.id} >
                     <h5>{photo.title}</h5>
                     <img  src={photo.thumbnailUrl}/>

                     </div>
                )}
            </div>
        </div>
    )
}

export default Albums;