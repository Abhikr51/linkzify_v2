import axios from 'axios'
import { baseURL, loginURL ,getUserURL, create_userURL} from '../../config/AppData'
export const SET_LOGIN = "SET_LOGIN"
export const SET_LOGOUT = "SET_LOGOUT"



export const setLogin = (username , password , next =()=>{},nextError= ()=>{}) =>{


    return (dispatch)=>{
        
        axios.post(baseURL+loginURL , {
            username,password
        }).then(({data})=>{
            if(data.status){
                localStorage.setItem('token' , data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                dispatch({
                    type : SET_LOGIN,
                    payload : data.data ,
                })
            }
            next();
        }).catch(err=>{
            console.log("setLogin" , err);
            nextError(err)
        })

        
    }
}
export const register = (name , next =()=>{},nextError= ()=>{}) =>{


    return (dispatch)=>{
        
        axios.post(baseURL+create_userURL , {
           name
        }).then(({data})=>{
            if(data.status){
                localStorage.setItem('token' , data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                dispatch({
                    type : SET_LOGIN,
                    payload : data.data ,
                })
            }else{
                alert(data.msg)
            }
            next();
        }).catch(err=>{
            console.log("register" , err);
            nextError(err)
        })

        
    }
}

export const setLogout = () =>{


    return (dispatch)=>{
        //your code for logout
        localStorage.clear()
        dispatch({
            type : SET_LOGOUT,
        })
    }
}

export const getUser = (next=()=>{},nextError=()=>{}) =>{


    return (dispatch)=>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.get(baseURL+getUserURL,).then(({data})=>{
            if(data.status){
                dispatch({
                    type : SET_LOGIN,
                    payload : data.data ,
                })
            }
            next();
        }).catch(err=>{
            console.log("getUser" , err);
            nextError(err)
        })
    }
}