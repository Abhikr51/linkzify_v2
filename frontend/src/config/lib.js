export const encryptedLocalStorage = {
    setItem : (key,data)=>{

        localStorage.setItem(key,btoa(data))
    },
    getItem : (key)=>{
        let data = localStorage.getItem(key)
        if(data){
            return atob(data)
        }
        return null
    },
    removeItem : (key)=>{
        localStorage.removeItem(key)
    },
}