import { fetchCategoriesRequest } from "../../api";
import actionTypes from "./types"

export const getCategories=()=>{
    return (dispatch)=>{
        dispatch({type:actionTypes.getCategories});
        fetchCategoriesRequest()
        .then(res=>{
            dispatch({type:actionTypes.getCategoriesSuccess,payload:res.data})
        })
        .catch(err=>{
            dispatch({type:actionTypes.getCategoriesFail,payload:err})
        })

    }
}

export const onSetSelectedCategory=(category)=>{
    return(dispatch)=>{
        console.log("category: -",category)
        dispatch({type:actionTypes.setSelectedCategory,payload:category});
    }
}