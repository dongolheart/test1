import {API} from "../config";

export const userRegister = (user) =>
{
    console.log(API)
    return fetch(`${API}/register`,
    {
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)

    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}