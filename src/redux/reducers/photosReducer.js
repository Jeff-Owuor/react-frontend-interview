const initialState = {
    photos:[],
}

export function photosReducer(state=initialState,action){
    switch(action.type){
        case "fetchPhotoData":
            return{
                ...state,
                photos:[
                    ...state.photos,
                    action.payload
                ]
            }
            case "LOAD_DATA_FAILURE":
                console.log("Error  occurred while fetching photos data!")
                break;
            default:
                return state
    }
}