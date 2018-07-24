import axios from 'axios';
import * as actionTypes from '../const';


//Action for fetching user's profile information
export const fetchUser = ()=>async dispatch=>{
    dispatch({type:actionTypes.SET_LOADER});
    let  response;
    try{
    response = await axios.get('/user/profile');
    dispatch({type:actionTypes.SET_USER,payload:response.data});
    }catch(e){
      dispatch({type:actionTypes.SET_ERROR,payload:response.data});
     
    }
  }