import * as types from "../type/type";

const GET_DATA = (data) => {
    return{
        type:types.GET_DATA,
        payload:data
    }
}

export const pre_get_data = () => {
    return(dispatch) => {
        
    }
}