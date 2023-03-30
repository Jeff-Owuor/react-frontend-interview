import  React  from 'react'
import { useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import Navbar from "./Navbar";

function Albums (){
    let albums = useSelector(elem=>elem.albums[0])
    let photos = useSelector(elem=>elem.photos[0])
    let { id } = useParams();
    let album = albums.find(album => album.id === parseInt(id));
    let photosPerAlbum = photos.filter(album => album.albumId ===parseInt(id))
    return (
        <div>
        <Navbar  style={{width:"100vw"}}/>
        <div  className='container'>
            <h2>{album.title}</h2>
            <div className='row'>
                {photosPerAlbum.map(photo => 
                     <div  className="col-md-3 col-lg-3 col-sm-4 mb-2" key={photo.id} >
                     <Link  to={`/photo/${photo.id}`}><h5>{photo.title}</h5></Link>
                     <img  src={photo.thumbnailUrl}/>
                     </div>
                )}
            </div>
        </div>
        </div>
    )
}

export default Albums;