import React, { useReducer } from 'react';
import axios from 'axios';    
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';
import {
    SEARCH_USERS,
    GET_USERS,
    SET_LOADING,
    CLEAR_USERS,
    SHOW_ALERT,
    REMOVE_ALERT
} from '../Types'

const GithubState=(props)=>{
    const initialState={
        users:[],
        user:null,
        loading:false,
        alert:null,
        newalert:null
        
    }
    const [state,dispatch]=useReducer(GithubReducer,initialState);


    //search users
    const searchUsers=async text=>{
        setLoading();
           const res=await   axios
           .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
           
           dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
    }
            //set loading
            const setLoading=()=>{
                dispatch({
                    type:SET_LOADING
                })
            }

            //cleat Users
const clearUsers=()=>{
    dispatch({
        type:CLEAR_USERS
    })
}

//removealert
 const removeAlert=()=>{
     dispatch({type:REMOVE_ALERT})
 }

const showALert=(ms,al)=>{
dispatch({
    type:SHOW_ALERT,
    payload:{ms,al}
})

setTimeout(()=>removeAlert(),2000)

}
//getUser
const getUser=async username =>{
    setLoading()
    const res1=await   axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    dispatch({type:GET_USERS,payload:res1.data})

  }
    return <GithubContext.Provider
    value={{
            users:state.users,
            user:state.user,
            loading:state.loading,
            searchUsers,
            clearUsers,
            getUser,
            showALert,
            alert:state.alert,
            setLoading
            
    }}
    >
{props.children}
    </GithubContext.Provider>
}
export default GithubState;