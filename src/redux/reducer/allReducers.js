import * as types from "../type/type"

const initialState = {
    users:[],
    user:{}
}
const crudReducer = (state=initialState,action) => {
    switch (action.type) {

        case types.GET_DATA:
            return{
                ...state,
                users:action.payload
            }
            break;
    
        default:
            break;
    }
}
export default crudReducer;