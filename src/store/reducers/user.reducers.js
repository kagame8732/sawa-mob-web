import actionTypes from "../actions/types";


const user = JSON.parse(localStorage.getItem("user"));
const initialState={
    userInfo: (user&&user.user) ?? null,
    isFetching:false,
    loginErrors:null,
    loggedIn: user?true:false,
    isUpdating:false,
    updatingErrors:null,

}


export default (state=initialState,action)=>{
    switch(action.type){
    case actionTypes.LogUserIn:
    return{
        ...state,
        isFetching:true,
    }
    case actionTypes.LogUserInSuccess:
        return{
            ...state,
            userInfo:action.payload,
            loggedIn:true,
            isFetching:false,
            loginErrors:null,
        }

        case actionTypes.LogUserInFail:
        return{
            ...state,
            loginErrors:action.payload,
            isFetching:false
        }
        case actionTypes.LogUserOut:
            return{
                ...state,
                loggedIn:false,
                userInfo:null,
            }
        case actionTypes.updateUser:
            return{
                ...state,
                isUpdating:true,
            }
        case actionTypes.updateUserSuccess:
            return{
                ...state,
                userInfo:action.payload,
                isUpdating:false
            }
    
        case actionTypes.updateUserFail:
            return{
                ...state,
                updatingErrors:action.payload,
                isUpdating:false
            }
        case actionTypes.getUser:
            return{
                ...state,
                userInfo:action.payload,
            }
        
        default:
            return state;
    }
}
// import { createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../api/config";
// import actionTypes from "../actions/types";

// const user = JSON.parse(localStorage.getItem("user"));

// const initialState={
//     userInfo: user ?? {},
//     loggedIn: !!(user && user.token),
// }
// const setUserStorage=(data)=>{
//     localStorage.setItem("user", JSON.stringify(data));
// }

// export default (state=initialState,action)=>{
//     switch(action.type){
//     case actionTypes.setUserInfo:
//         return{
//             ...state,
//             userInfo : action.payload,
//             loggedIn : !!action.payload,
            
           
//             if (loggedIn){
//               axiosInstance.defaults.headers.common = {
//                 Authorization: `Bearer ${action.payload.token}`,
//               };
//             },

//         }

//     default:
//         return state;
//     }
// }

