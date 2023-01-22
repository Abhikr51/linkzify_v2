import axios from 'axios'
import { baseURL, loginURL ,getUserURL, create_userURL} from '../../config/AppData'
import { encryptedLocalStorage } from '../../config/lib'
export const SET_LOGIN = "SET_LOGIN"
export const SET_LOGOUT = "SET_LOGOUT"



export const setLogin = (username , password , next =()=>{},nextError= ()=>{}) =>{


    return (dispatch)=>{
        
        axios.post(baseURL+loginURL , {username,password}).then(({data})=>{
            if(data.status){
                encryptedLocalStorage.setItem('token' , data.token);
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
        let vxx_id = encryptedLocalStorage.getItem("vxx_id")
        let vxxu = encryptedLocalStorage.getItem("vxxu")
        let temp = []
        if(vxxu){
            vxxu = JSON.parse(vxxu);
            vxxu = [...vxxu, name]
            vxxu = JSON.stringify(vxxu)
            encryptedLocalStorage.setItem("vxxu" , vxxu)
        }else{
            vxxu = JSON.stringify([name])
            encryptedLocalStorage.setItem("vxxu" , vxxu)
            
        }
        let data_packet = {
            name, vxx_id : btoa(vxx_id) ,vxxu : btoa(vxxu)
        }

        axios.post(baseURL+create_userURL , data_packet).then(({data})=>{
            if(data.status){
                encryptedLocalStorage.setItem('token' , data.token);
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
        encryptedLocalStorage.removeItem("token")
        dispatch({
            type : SET_LOGOUT,
        })
    }
}

export const getUser = (next=()=>{},nextError=()=>{}) =>{


    return (dispatch)=>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${encryptedLocalStorage.getItem('token')}`;
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