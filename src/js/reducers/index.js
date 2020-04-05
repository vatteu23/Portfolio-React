import { UPDATE_USER, SIGNOUT_USER, UPDATE_LOG, GET_GROUPLIST } from "../constants";

const initialState = {
   
};



function rootReducer(state = initialState, action) {
   switch(action.type) {
       case UPDATE_USER : {
           return {...state,
            loading:false,
            authenticated: true,
            currentUser: action.auth.email
        }
       }
       case SIGNOUT_USER :{
           return{
               ...state,
               loading:false,
               authenticated: false,
               currentUser: null
           }
       }
       case UPDATE_LOG :{
        return{
            ...state,
            logSuccess:action.status
        }
        
        }
        case GET_GROUPLIST :{
            return{
                ...state,
                list:action.list
            }
        }
       default:
           return state;
   }
}

export default rootReducer;