function Login () {
    return (
        <>
            <section className="flex flex-col items-center content-center rounded-2xl 
                bg-gradient-to-tl from-slate-800 to-slate-500 w-1/4 px-20 py-12 mx-auto my-44 space-y-5">
                    <h1 className="uppercase text-3xl font-bold text-slate-500 text-center bg-[#00040f] w-96 py-2">login</h1>
                <form className="flex flex-col text-justify w-3/4 space-y-5">
                        <input type="text" placeholder="username" className="rounded-lg py-1 px-2"></input>
                        <input type="password" placeholder="password" className="rounded-lg py-1 px-2"></input>
                </form>
                    <button className="bg-gradient-to-r from-sky-500 to-slate-100 rounded-lg font-bold capitalize py-2 px-6">login</button>
            </section>
        </>
    )
}

export default Login
