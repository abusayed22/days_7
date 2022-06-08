import axios from "axios";
import * as types from "../type/type";


const get_data = (data) => {
    return{
        type:types.GET_DATA,
        payload:data
    }
}

export const pre_get_data = () => {
    return(dispatch) => {
        axios.get('http://127.0.0.1:8000/api/students')
        .then( res => {
            dispatch(get_data(res.data.students))
        })
        .catch(err => console.log(err))
    }
}

const delete_data = () => {
    return{
        type:types.DELETE_DATA
    }
}
export const pre_delete_data = (id) => {
    return(dispatch) => {
        axios.delete(`http://127.0.0.1:8000/api/students/${id}`)
        .then(res => {
            dispatch(delete_data())
            dispatch(get_data())
        })
        .catch(err => console.log(err))
    }
}

const single_state = (data) => {
    return {
        type:types.SINGLE_STATE,
        payload:data
    }
}
export const pre_single_state = (id) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/students/${id}`)
        .then(res => {
            dispatch(single_state(res.data.student))
        })
        .catch(err => console.log(err))
    }
}

const update_data = () => {
    return{
        type:types.UPDATE_DATA
    }
}
export const pre_update_data = (id,single) => {
    return(dispatch) => {
        axios.put(`http://127.0.0.1:8000/api/students/${id}`,single)
        .then(res => {
            dispatch(update_data())
            dispatch(get_data())
        })
        .catch(err => console.log(err))
    }
}

const add_data = () => {
    return{
        type:types.ADD_DATA
    }
}
export const pre_add_data = (add) => {
    return(dispatch) => {
        axios.post('http://127.0.0.1:8000/api/students/',add)
        .then(res => {
            dispatch(add_data())
        })
        .catch(err => console.log(err))
    }
}