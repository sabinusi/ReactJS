import {
    SEARCH_USERS,
    GET_USERS,
    SET_LOADING,
    CLEAR_USERS,
    SHOW_ALERT,
    REMOVE_ALERT
} from '../Types'
export default (state,action)=>{
    switch (action.type) {
        case SEARCH_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
            break;
            case SET_LOADING:
                return {
                    ...state,
                    loading:true
                }
                break;
                case CLEAR_USERS:
                    return({
                        ...state,
                        users:[]
                    })
                    break;
            case SHOW_ALERT:
                return({
                    ...state,
                    alert:action.payload
                })
                break;

            case GET_USERS:
                return({
                    ...state,
                    user:action.payload,
                    loading:false
                })

            case REMOVE_ALERT:
                return({
                    ...state,
                    alert:null
                })
    
        default:
            return state
            break;
    }
}