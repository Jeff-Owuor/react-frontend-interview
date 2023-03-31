const initialState = {
    users:[],
}

export function userReducer(state=initialState,action){
    switch(action.type){
        case "fetchUserData":
            return{
                ...state,
                users:[
                    ...state.users,
                    action.payload
                ]
            }
            case "LOAD_DATA_FAILURE":
                console.log("Error  occurred while fetching user data!")
                break;
            default:
                return state
    }
}