const initialState = {
    albums:[],
}

export function albumReducer(state=initialState,action){
    switch(action.type){
        case "fetchAlbumData":
            return{
                ...state,
                albums:[
                    ...state.albums,
                    action.payload
                ]
            }
            case "LOAD_DATA_FAILURE":
                console.log("Error  occurred while fetching album data!")
                break;
            default:
                return state
    }
}