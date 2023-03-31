export  function loadPhotoData(dispatch, getState) {
  fetch(`https://jsonplaceholder.typicode.com/photos`) // Redux Thunk handles these
 .then(res => res.json())
 .then(
   data => dispatch({ type: 'fetchPhotoData', payload:data }),
   err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
 );
}