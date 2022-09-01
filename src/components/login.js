import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

function Login() {
    const navigate = useNavigate()
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")

    const onClick = (e) => {
        e.preventDefault()
        navigate("/")
        axios.post("http://localhost:3001/login",{
            name: name,
            password: password
        }).then(() => {
            alert(`Welcome ${name}, logged in in successfully`)
        }).catch(() => {
            alert(`aww It didnt work`)
        })
    }

    const onclicking = (e) => {
        e.preventDefault()
        navigate("/signup")
    }
    return (
        <>
            <section className="flex flex-col items-center content-center rounded-2xl 
                bg-gradient-to-tl from-slate-800 to-slate-500 w-1/4 px-20 py-12 mx-auto my-44 space-y-5">
                <h1 className="uppercase text-3xl font-bold text-slate-500 text-center bg-[#00040f] w-96 py-2">login</h1>
                <form className="flex flex-col text-justify w-4/5 space-y-5 items-center">
                    <input type="text" placeholder="username" className="rounded-lg py-1 px-4 w-52"
                    onChange={(event) => {setname(event.target.value)}}></input>
                    <input type="password" placeholder="password" className="rounded-lg py-1 px-4 w-52"
                    onChange={(event) => {setpassword(event.target.value)}}></input>
                    <div className="flex flex-col space-y-2 justify-evenly">
                    <button className="bg-gradient-to-r from-sky-500 to-slate-100 rounded-lg font-bold capitalize py-2 px-6"
                    onClick={onClick}>login</button>
                    <p className="text-lg font-lightbold text-[#00040f]">create an account</p>
                    <button className="bg-gradient-to-r from-sky-500 to-slate-100 rounded-lg font-bold capitalize py-2 px-6"
                        >signup</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
