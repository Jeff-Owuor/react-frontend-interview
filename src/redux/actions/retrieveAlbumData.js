export  function loadAlbumData(dispatch, getState) {
  fetch(`https://jsonplaceholder.typicode.com/albums`) // Redux Thunk handles these
 .then(res => res.json())
 .then(
   data => dispatch({ type: 'fetchAlbumData', payload:data }),
   err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
 );
}