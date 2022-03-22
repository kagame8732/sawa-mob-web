import { loginRequest, updateTeacherProfileRequest } from "../../api";
import { axiosInstance } from "../../api/config";
import AlertMessage from "../../components/Alert";
import { removeUserStorage, setUserProfileStorage, setUserStorage } from "../../helpers/userUtils";
import { setUserInfo} from "../reducers/user.reducers";
import actionTypes from "./types";
export const onUserLogIn = (email, password) => {
    return (dispatch,getState) => {
      dispatch({type:actionTypes.LogUserIn})
      loginRequest({ email, password })
        .then((res) => {
            console.log('use res:',res)      
          if(res&&res.data){
            
            setUserStorage(res.data);
            axiosInstance.defaults.headers.common = {
                Authorization: `Bearer ${res.data.token}`,
              };
            dispatch({type:actionTypes.LogUserInSuccess,payload:res.data});
               
           
          }
        })
        .catch((err) => {
            console.log('use err:',err) 
            dispatch({type:actionTypes.LogUserInFail,payload:err})
        });
    };
  };
export const onUserLogout=()=>{
    return(dispatch)=>{
        removeUserStorage();
        dispatch({type:actionTypes.LogUserOut})
    }
}
export const onUpdateUser=(data,alert)=>{
    return(dispatch)=>{
      console.log(Array.from(data.entries()))
        console.log("data",data)
        dispatch({type:actionTypes.updateUser});
        updateTeacherProfileRequest(data)
        .then((res)=>{
            console.log("res",res)
            const {token,user} = JSON.parse(localStorage.getItem("user"));
            const newUserProfile={
              token,user:res.data[0]
            }
            dispatch({type:actionTypes.updateUserSuccess,payload:res.data[0]});
            setUserStorage(newUserProfile);
            alert.success(<AlertMessage message={res.message}/>)
        }).catch((err)=>{
            console.log("err",err)
            alert.error(<AlertMessage message="Something went wrong. try again"/>)
            dispatch({type:actionTypes.updateUserFail,payload:err})
        })

    }
}
export const getUserProfile=()=>{
  return(dispatch)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('user called:',user)
    dispatch({type:actionTypes.getUser,payload:(user&&user.user)})
  }
}