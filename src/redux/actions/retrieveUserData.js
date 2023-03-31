export  function loadUserData(dispatch, getState) {
  fetch(`https://jsonplaceholder.typicode.com/users`) // Redux Thunk handles these
 .then(res => res.json())
 .then(
   data => dispatch({ type: 'fetchUsersData', payload:data }),
   err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
 );
}