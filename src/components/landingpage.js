import React from "react";
import Emv from "./parts/emv";
import { useNavigate } from "react-router-dom";

function Landingpage() {

    const navigate = useNavigate()

    const onClick = (e) => {
        navigate("/login")
    }
    return (
        <>
        <div className="mx-[8em] my-[1em]">
            <header className="grid grid-cols-2">
                <div className="text-lg font-bold">
                    <span className="text-white capitalize">hoo</span>
                    <span className="text-sky-300 capitalize">bank</span>
                </div>
                <div className="flex flex-row justify-between">
                    <a href="/" className="text-lg text-slate-400 capitalize">home</a>
                    <a href="/" className="text-lg text-slate-400 capitalize">about us</a>
                    <a href="/" className="text-lg text-slate-400 capitalize">features</a>
                    <a href="/" className="text-lg text-slate-400 capitalize">solution</a>
                </div>
            </header>
            <section className="grid grid-cols-2 scroll-smooth my-32 mt-10 items-center">
                <div className="flex flex-col space-y-8">
                    <div className="uppercase bg-stone-900 space-x-1 rounded-lg text-center py-2 w-2/4">
                        <span className="text-white">20%</span>
                        <span className="text-slate-400">discount for </span>
                        <span className="text-white">1 month</span>
                        <span className="text-slate-400">account</span>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-7xl font-semibold capitalize text-white">the next</h2>
                        <h2 className="text-7xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-slate-100">generation</h2>
                        <h2 className="text-7xl font-semibold capitalize text-white">payment method</h2>
                    </div>

                    <div>
                        <p className="text-lg text-slate-500 w-3/4">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                            We examine annual percentage rates, annual fees.</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="rounded-full w-1/12 p-14 bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-300 "></div>
                    <div className="ml-36">
                        <div className="absolute blur-3xl opacity-30 border-l-[300px] border-l-transparent border-t-[500px] border-t-slate-300 border-r-[300px] border-r-transparent py-64"></div>
                        <div className="absolute w-2/12 h-28 grid flex flex-col rounded-3xl rotate-[60deg] skew-y-[160deg] mt-[-2em] ml-[13em]
                        hover:opacity-80 hover:rotate-[50deg] transition duration-700">
                            <div className="bg-slate-500 relative w-full px-8 py-24 rounded-t-3xl opacity-60 flex flex-col items-start">
                                <div className="text-lg font-bold mt-[-5em] ml-[5em] space-x-1">
                                    <span className="text-white capitalize">hoo</span>
                                    <span className="text-sky-300">Bank</span>
                                </div>
                                <h2 className="text-base text-white font-black rotate-[90deg] mt-[5em] ml-[-6em] w-full">1833 7163 3892 1028</h2>
                            </div>

                            <div className="bg-sky-400 relative w-full px-10 py-6 rounded-b-3xl opacity-60 flex flex-col items-center space-y-3">
                                <Emv />
                                <div className="flex flex-row w-full space-x-12 items-end">
                                    <div className="flex flex-col">
                                        <h2 className="uppercase font-bold text-white text-sm">ms awadh</h2>
                                        <h3 className="font-bold text-white">06/24</h3>
                                    </div>
                                    <div className="rotate-[90deg]">
                                        <div className="border-2 rounded-full p-4 border-white"></div>
                                        <div className="border-2 rounded-full p-4 border-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-2/12 h-46 grid flex flex-col rounded-3xl rotate-[60deg] skew-y-[160deg] mt-[-1em] bg-white opacity-20 border-4 border-white ml-[5em]
                        hover:opacity-30 hover:rotate-[50deg] transition duration-700">
                            <div className="relative w-full px-10 py-28 rounded-t-xl opacity-40 flex flex-col items-start">
                            </div>
                            <div className="relative w-full px-10 py-6 rounded-b-xl opacity-40 flex flex-col items-center space-y-3">
                                <Emv />
                                <div className="flex flex-row w-full space-x-12 items-end">
                                    <div className="flex flex-col">
                                        <h2 className="uppercase font-bold text-slate-800 text-sm">ms awadh</h2>
                                        <h3 className="font-bold text-slate-800">06/24</h3>
                                    </div>
                                    <div className="rotate-[90deg]">
                                        <div className="border-2 rounded-full p-4 border-slate-500"></div>
                                        <div className="border-2 rounded-full p-4 border-slate-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-2/12 h-46 grid flex flex-col rounded-3xl rotate-[60deg] skew-y-[160deg] mt-8 bg-white opacity-20 py-52 blur-[1px] border-8 border-white ml-[5em]
                        hover:opacity-10 hover:rotate-[50deg] transition duration-700"></div>

                        <div className="rounded-full w-2 p-10 bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-300 ml-96 mt-72 absolute"></div>
                        <div className="rounded-full w-2 p-4 bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-300 ml-[-2em] mt-96 absolute"></div>
                    </div>
                    <div className="bg-robot-hand w-full py-64 px-96 bg-contain bg-no-repeat ml-[-0.60em] mt-36"></div>
                </div>
            </section>

            <section className="grid grid-cols-3 my-20">
                <div className="flex flex-row items-baseline space-x-5">
                    <h2 className="text-3xl font-bold capitalize text-white">3800+</h2>
                    <p className="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-slate-100">
                        user active
                    </p>
                </div>
                <div className="flex flex-row items-baseline space-x-5 justify-self-center border border-x-white border-y-transparent px-16">
                    <h2 className="text-3xl font-bold capitalize text-white">230+</h2>
                    <p className="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-slate-100">
                        trusted by company
                    </p>
                </div>
                <div className="flex flex-row items-baseline space-x-5 justify-self-end">
                    <h2 className="text-3xl font-bold uppercase text-white">$230m+</h2>
                    <p className="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-slate-100">
                        transaction
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-2 my-36">
                <div className="flex flex-col space-y-5">
                    <h2 className="text-3xl font-bold capitalize text-white w-3/4">You do the business, we’ll handle the money.</h2>
                    <p className="text-lg text-slate-500 w-3/4">With the right credit card, you can improve your financial life by building credit,
                        earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button className="capitalize px-6 py-3 bg-gradient-to-l from-sky-500 to-slate-100 rounded-lg w-1/4 font-bold" onClick={onClick}>get started</button>
                </div>
                <div className="flex flex-col space-y-10 items-center">
                    <div className="flex flex-row rounded-3xl hover:bg-slate-800 hover:opacity-80 w-4/5 hover:scale-105 space-x-5 p-5 transition duration-500">
                        <div className="bg-green-400 rounded-full p-5 opacity-20 h-5 w-8"></div>
                        <div className="flex flex-col">
                            <h2 className="capitalize font-bold text-xl text-slate-300">rewards</h2>
                            <p className="text-lg text-slate-500">The best credit cards offer some tantalizing
                                combinations of promotions and prizes</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-3xl hover:bg-slate-800 hover:opacity-80 hover:scale-105 w-4/5 space-x-5 p-5 transition duration-500">
                        <div className="bg-green-400 rounded-full p-5 opacity-20 h-5 w-8"></div>
                        <div className="flex flex-col">
                            <h2 className="capitalize font-bold text-xl text-white">100% secured</h2>
                            <p className="text-lg text-slate-500">We take proactive steps make sure your
                                information and transactions are secure.</p>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-3xl hover:bg-slate-800 hover:opacity-80 w-4/5 hover:scale-105 space-x-5 p-5 transition duration-500">
                        <div className="bg-green-400 rounded-full p-5 opacity-20 h-5 w-8"></div>
                        <div className="flex flex-col">
                            <h2 className="capitalize font-bold text-xl text-white">Balance Transfer</h2>
                            <p className="text-lg text-slate-500">A balance transfer credit card can save you a
                                lot of money in interest charges.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 my-36 items-center">
                <div className="flex flex-col">
                    <div className="bg-white rounded-full w-6/12 py-80 opacity-10 absolute ml-[-24em] blur-3xl"></div>
                <div className="flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 rounded-xl w-1/5 p-10 space-y-4 absolute ml-64 mt-[-4em] shadow shadow-black
                hover:opacity-80 hover:scale-105 transition duration-500">
                    <div className="flex flex-row space-x-5">
                        <div className="bg-paypal p-7 w-10 h-10 bg-contain bg-white bg-no-repeat rounded-full border-8 border-white"></div>
                            <div className="flex flex-col space-y-2">
                                <h2 className="text-white text-3xl font-bold">paypal</h2>
                                <p className="text-white text-lg font-light">checkout</p>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-6 mt-5 self-start">
                            <div className="flex flex-col space-y-0.5 items-start">
                                <p className="text-white text-lg font-light">total</p>
                                <h2 className="text-white text-3xl font-bold">$210</h2>   
                            </div>
                            <div>
                                <button className="bg-transparent border-[2px] border-cyan-400 rounded-lg mt-7 px-3 py-1 capitalize font-bold text-cyan-400">
                                    change
                                </button>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-sky-500 to-slate-100
                         rounded-lg font-medium capitalize py-2 px-5">make payment</button>
                </div>
                <div className="flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 rounded-xl w-9/12 p-10 space-y-4 mt-44
                hover:opacity-80 hover:scale-105 transition duration-500">
                    <div className="flex flex-col">
                        <h2 className="text-white text-3xl font-bold capitalize">last transaction</h2>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <div className="flex flex-row w-full space-x-5 items-center">
                            <div className="bg-dribble px-5 h-3/5 rounded-full bg-red-500 bg-no-repeat bg-cover"></div>
                            <div>
                                <h2 className="text-2xl font-bold capitalize text-white">dribbble pro</h2>
                                <p className="text-lg text-gray-400 font-lightbold">15 Days ago</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className="bg-down w-1/12 bg-no-repeat p-2 bg-contain"></div>
                            <h2 className="text-white text-xl">-$250,93</h2>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <div className="flex flex-row w-full space-x-5 items-center">
                            <div className="bg-white py-4 rounded-full">
                            <div className="bg-netflix px-5 py-1 bg-white bg-no-repeat bg-cover"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold capitalize text-white">netflix</h2>
                                <p className="text-lg text-gray-400 font-lightbold">4 Days ago</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className="bg-down w-1/12 bg-no-repeat p-2 bg-contain"></div>
                            <h2 className="text-white text-xl">-$250,93</h2>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <div className="flex flex-row w-full space-x-5 items-center">
                            <div className="bg-white py-1 px-2 rounded-full">
                                <div className="bg-manulife px-3 py-4 bg-white bg-no-repeat bg-contain"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold capitalize text-white">manulife cash</h2>
                                <p className="text-lg text-gray-400 font-lightbold">4 Days ago</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className="bg-up w-1/12 bg-no-repeat p-2 bg-contain"></div>
                            <h2 className="text-white text-xl">-$250,93</h2>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="bg-white rounded-lg flex flex-row p-2 items-center justify-evenly w-2/4 ml-52
                    hover:opacity-80 hover:scale-105 transition duration-500">
                        <div className="rounded-full bg-green-500 p-4"></div>
                        <p className="text-center">Great! Your Payment is succesfully.</p>
                    </div>
                </div>
                </div>

                <div className="flex flex-col space-y-10">
                    <h1 className="text-6xl font-bold text-white">Easily control your billing & invoicing.</h1>
                    <p className="text-slate-500 text-xl w-3/4">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
                         Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                         <div className="flex flex-row justify-start space-x-20">
                            <div className="bg-black rounded-lg px-5 border border-white">
                                <div className="bg-apple bg-transparent px-16 py-5 rounded-lg bg-no-repeat bg-contain mt-5"></div>
                            </div>
                            <div className="bg-black rounded-lg px-5 border border-white">
                                <div className="bg-play bg-transparent px-20 py-8 bg-no-repeat bg-contain mt-4"></div>
                            </div>
                         </div>
                </div>
            </section>

            <section className="grid grid-cols-2 my-20 h-[30em]">
                <div className="flex flex-col space-y-8 w-5/6">
                    <h1 className="text-5xl font-bold text-white">Find a better card deal in few easy steps.</h1>
                    <p className="text-lg text-slate-400">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor
                        .ç Aliquet ultrices ac, ametau.</p>
                    <button className="bg-gradient-to-r from-sky-500 to-slate-100
                         rounded-lg font-medium capitalize py-4 px-6 w-1/4" onClick={onClick}>get started</button>
                </div>
                <div className="flex flex-col space-y-5 items-center">
                    <div className="items-center rounded-2xl flex flex-col bg-gradient-to-tl 
                    from-slate-900 to-slate-600 py-10 px-4 space-y-2 absolute mr-[25em]">
                        <span className="bg-cyan-900 rounded-sm p-2 border"></span>
                        <h2 className="text-xl font-bold text-white">Scan Credit Cards</h2>
                        <p className="text-sm text-slate-100 w-4/6 text-center">Scan yourcredit card in 4 minutes.</p>
                    </div>

                    <div className="items-center rounded-2xl flex flex-col bg-gradient-to-tl 
                    from-slate-900 to-slate-600 py-10 w-1/4 space-y-2 absolute ml-[20em]">
                        <div className="flex flex-row justify-between items-baseline w-10/12 mx-10">
                            <h2 className="text-xl font-bold text-white capitalize">online analysis</h2>
                            <h2 className="text-sm font-lightbold text-white capitalize">1 month</h2>
                        </div>
                        <div className="flex flex-row justify-between items-baseline w-10/12 mx-10">
                            <h2 className="text-lg font-lightbold text-cyan-500 capitalize w-1/3"><strong>$ 2,334,67</strong> Income</h2>
                            <h2 className="text-sm font-lightbold text-cyan-500 capitalize w-1/3 text-right">$ 5.31M Expenses</h2>
                        </div>
                        <div className="bg-graph bg-transparent px-14 py-5 bg-no-repeat">
                            <div className="bg-dark-graph p-10 bg-no-repeat absolute mt-[0.5em] ml-[1.1em]"></div>
                        </div>
                        <div className="flex flex-row justify-between items-baseline w-10/12 pt-10">
                            <h1 className="text-slate-100 font-light text-lg">jan</h1>
                            <h1 className="text-slate-100 font-light text-lg">feb</h1>
                            <h1 className="text-slate-900 font-light text-lg bg-cyan-400 rounded-lg px-1">mar</h1>
                            <h1 className="text-slate-100 font-light text-lg">apr</h1>
                            <h1 className="text-slate-100 font-light text-lg">may</h1>
                            <h1 className="text-slate-100 font-light text-lg">jun</h1>
                            <h1 className="text-slate-100 font-light text-lg">jul</h1>
                        </div>
                    </div>

                    <div className="mr-72 w-4/12">
                        <div className="items-center rounded-2xl flex flex-col bg-gradient-to-tl 
                        from-slate-900 to-slate-600 py-10 px-20 space-y-2 absolute mt-[20em] h-48">
                            <div className="flex flex-row justify-between items-center w-[15em] mb-8">
                                <h2 className="text-xl font-bold text-white capitalize text-left">pay method</h2>
                                <div className="bg-down p-2 bg-no-repeat bg-contain"></div>
                            </div>
                            <div className="flex flex-row justify-between items-baseline w-[18em]">
                                <div className="bg-paypal p-6 rounded-lg bg-no-repeat bg-contain"></div>
                                <div className="bg-app-logo p-6 rounded-lg bg-no-repeat bg-contain"></div>
                                <div className="bg-visa p-6 rounded-lg bg-no-repeat bg-contain bg-white"></div>
                                <div className="bg-shopify p-6 rounded-lg bg-no-repeat bg-contain bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-row justify-between text-justify my-56 items-center">
                <div className="w-1/3">
                    <h1 className="text-5xl font-bold text-white">What people are saying about us</h1>
                </div>
                <div className="w-1/3">
                    <p className="text-slate-400 text-xl">Everything you need to accept card payments and 
                    grow your business anywhere on the planet.</p>
                </div>
            </section>

            <section className="flex flex-row justify-between my-20">
                <div className="flex flex-col py-10 px-5 w-3/12 space-y-5 rounded-2xl hover:bg-slate-700 hover:scale-x-105 hover:scale-105 transition duration-700">
                    <div className="font-black text-5xl text-cyan-500 items-start">/ /</div>
                    <div>
                        <p className="text-lg text-slate-400">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <div className="bg-thumbnail-1 p-5 rounded-full
                        bg-no-repeat bg-contain"></div>
                        <div>
                            <h1 className="text-2xl text-white font-bold">Herman Jensen</h1>
                            <p className="text-lg text-slate-400">Founder & Leader</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-10 px-5 w-3/12 space-y-5 rounded-2xl hover:bg-slate-700 hover:scale-x-105 hover:scale-105 transition duration-700">
                    <div className="font-black text-5xl text-cyan-500 items-start">/ /</div>
                    <div>
                        <p className="text-lg text-slate-400">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <div className="bg-thumbnail-1 p-5 rounded-full
                        bg-no-repeat bg-contain"></div>
                        <div>
                            <h1 className="text-2xl text-white font-bold">Herman Jensen</h1>
                            <p className="text-lg text-slate-400">Founder & Leader</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-10 px-5 w-3/12 space-y-5 rounded-2xl hover:bg-slate-700 hover:scale-x-105 hover:scale-105 transition duration-700">
                    <div className="font-black text-5xl text-cyan-500 items-start">/ /</div>
                    <div>
                        <p className="text-lg text-slate-400">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <div className="bg-thumbnail-1 p-5 rounded-full
                        bg-no-repeat bg-contain"></div>
                        <div>
                            <h1 className="text-2xl text-white font-bold">Herman Jensen</h1>
                            <p className="text-lg text-slate-400">Founder & Leader</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-row justify-between items-center content-center my-20">
                <div className="bg-air-bnb px-20 py-8 bg-no-repeat bg-contain"></div>
                <div className="bg-binance px-20 py-8 bg-no-repeat bg-contain mt-5"></div>
                <div className="bg-coinbase px-20 py-8 bg-no-repeat bg-contain "></div>
                <div className="flex flex-row space-x-3">
                    <div className="bg-box px-8 py-5 bg-no-repeat bg-contain"></div>
                    <div className="bg-dropbox px-20 py-8 bg-no-repeat bg-contain"></div>
                </div>
            </section>

            <section className="flex flex-row items-center content-center rounded-2xl 
            bg-gradient-to-tl from-slate-800 to-slate-500 h-64 w-10/12 px-20 py-10 mx-20 my-36">
                <div className="flex flex-col text-justify w-3/4 space-y-5">
                    <h1 className="text-white text-5xl font-bold">let's try our servic now</h1>
                    <p className="text-lg text-slate-300 w-3/4">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div>
                <button className="bg-gradient-to-r from-sky-500 to-slate-100
                         rounded-lg font-medium capitalize py-4 px-6" onClick={onClick}>get started</button>
                </div>
            </section>
            </div>

            <footer className="bg-[#0B0A0C99] opacity-90">
                <div className="flex flex-col mx-[8em] py-10">
                <div className="flex flex-row items-start justify-between my-16">
                    <div className="flex flex-col space-y-5">
                        <div className="text-4xl font-bold">
                            <span className="text-white capitalize">hoo</span>
                            <span className="text-sky-300 capitalize">bank</span>
                        </div>
                        <p className="text-lg text-slate-300 w-3/5">A new way to make the payments easy, reliable and secure.</p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-xl text-white text-bold capitalize">useful links</h2>
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">content</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">How it Works</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">create</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">explore</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">Terms & Services</h3>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-xl text-white text-bold capitalize">community</h2>
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">help-center</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">partners</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">suggestions</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">blog</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">Newsletters</h3>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-xl text-white text-bold capitalize">partner</h2>
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">our partner</h3>
                            <h3 className="text-lg text-slate-400 text-lightbold capitalize">Become a Partner</h3>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="flex flex-row items-center justify-between mt-10">
                    <div className="flex flex-row space-x-3">
                        <h1 className="text-slate-300 text-lg font-lightbold capitalize">copyright</h1>
                        <div></div>
                        <h1 className="text-slate-300 text-lg font-lightbold capitalize">2021 HooBank. All Rights Reserved.</h1>
                    </div>
                    <div className="flex flex-row align-baseline justify-between w-44">
                        <div className="p-1">
                            <div className="bg-facebook p-4 bg-no-repeat bg-contain"></div>
                        </div>
                        <div className="p-1 mt-1">
                            <div className="bg-twitter p-4 bg-no-repeat bg-contain"></div>
                        </div>
                        <div className="p-1">
                            <div className="bg-linkedin p-4 bg-no-repeat bg-contain"></div>
                        </div>
                    </div>
                </div>
                </div>
            </footer>

        </>
    )
}

export default Landingpage