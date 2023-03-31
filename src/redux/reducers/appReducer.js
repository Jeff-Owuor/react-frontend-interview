// import { combineReducers } from "redux";
// import { albumReducer } from "./albumReducer";
// import { userReducer } from "./userReducer";
// import { photosReducer } from "./photosReducer";

// const appReducer = combineReducers({
//     users:userReducer,
//     albums:albumReducer,
//     photos:photosReducer
// })

// export default appReducer;

const initialState = {
    users:[],
    albums:[],
    photos:[]
}

const appReducers = (state=initialState,action) => {
    switch(action.type){
        case 'fetchUsersData':
            return {
                ...state,
                users:[
                    ...state.users,
                    action.payload
                ]
            }
            case "fetchAlbumData":
            return{
                ...state,
                albums:[
                    ...state.albums,
                    action.payload
                ]
            }
            case "fetchPhotoData":
            return{
                ...state,
                photos:[
                    ...state.photos,
                    action.payload
                ]
            }
            case 'LOAD_DATA_FAILURE':
                console.log("Error Occurred!!")
            default:
                return state
    }
}
export default appReducers