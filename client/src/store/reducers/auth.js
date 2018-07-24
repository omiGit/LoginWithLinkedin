import * as actionTypes from '../const';

//Initial default state of application 
const initState ={
    user:{id:''},
    loading:false,
    error:''
}

//Reducer for profile state management
export default (state=initState,action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {...state,user:{...action.payload},loading:false,error:''}
        case actionTypes.SET_LOADER:
            return {...state,loading:true}
        case actionTypes.SET_ERROR:
            return {...state,lodading:false,error:action.payload}
        default:
            return state;
    }
}