import { useState, useEffect } from "react"
import axios from "axios"


function User () {
    const [userdetails, setuserdetails] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/read").then((response) => {
            setuserdetails(response.data)
        }).catch(() => {
            alert(`aww It didnt work`)
        })
    },[])

    userdetails.map((i)=> console.log(i))

    return (
        <>
        <div>
        {userdetails.map((e) => {
            return <div className="text-2xl font-bold
            text-slate-200">{e.username} password is {e.password}</div>
        })}
        </div>
        </>
    )
}

export default User
