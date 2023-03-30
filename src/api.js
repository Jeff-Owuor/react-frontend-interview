export const fetchUsers = async() => {
    const  userResponse = await  fetch('https://jsonplaceholder.typicode.com/users')
    const {results} = await userResponse.json()
    return results;
}

// const fetchAlbums = async() => {
//     const  albumResponse = await fetch('https://jsonplaceholder.typicode.com/albums')
//     const {results} = await albumResponse.json()
//     return results;
// }

// const fetchPhotos = async() => {
//     const  photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
//     const {results} = await photosResponse.json()
//     return results;
// }