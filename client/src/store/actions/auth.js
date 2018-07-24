import axios from 'axios';
import * as actionTypes from '../const';
export const fetchUser = ()=>async dispatch=>{
    dispatch({type:actionTypes.SET_LOADER});
    let  response;
    try{
    response = await axios.get('/user/profile');
    dispatch({type:actionTypes.SET_USER,payload:response.data});
    }catch(e){
      dispatch({type:actionTypes.SET_ERROR,payload:response.data.error});
     
    }
  }