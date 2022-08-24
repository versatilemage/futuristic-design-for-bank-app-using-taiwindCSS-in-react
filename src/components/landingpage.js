import React from "react";
import Emv from "./parts/emv";

function Landingpage() {
    return (
        <>
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
                        <div className="absolute w-2/12 h-28 grid flex flex-col rounded-3xl rotate-[60deg] skew-y-[160deg] mt-[-2em] ml-[13em]">
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

                        <div className="absolute w-2/12 h-46 grid flex flex-col rounded-3xl rotate-[60deg] skew-y-[160deg] mt-[-1em] bg-white opacity-20 border-4 border-white ml-[5em]">
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

                        <div className="absolute w-2/12 h-46 grid flex flex-col rounded-3xl rotate-[60deg] skew-y-[160deg] mt-8 bg-white opacity-20 py-52 blur-[1px] border-8 border-white ml-[5em]"></div>

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
                    <button className="capitalize px-6 py-3 bg-gradient-to-l from-sky-500 to-slate-100 rounded-lg w-1/4 font-bold">get started</button>
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

            <section className="grid grid-cols-2 my-36">
                <div className="flex flex-col">
                    <div className="bg-white rounded-full w-6/12 py-80 opacity-20 absolute ml-[-24em] blur-3xl"></div>
                <div className="flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 rounded-xl w-1/5 p-10 space-y-4 absolute ml-56 shadow shadow-black">
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
                <div className="flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 rounded-xl w-3/5 p-10 space-y-4 mt-44">
                    <div className="flex flex-row space-x-5">
                        <div className="bg-paypal p-7 w-10 h-10 bg-contain bg-white bg-no-repeat rounded-full border-8 border-white"></div>
                            <div className="flex flex-col space-y-2">
                                <h2 className="text-white text-3xl font-bold">paypal</h2>
                                <p className="text-white text-lg font-light">checkout</p>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-6 mt-5 self-end">
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
                <div>
                    <div className="bg-white rounded-lg flex flex-row p-2 items-center justify-evenly w-2/4 ml-52">
                        <div className="rounded-full bg-green-500 p-4"></div>
                        <p className="text-center">Great! Your Payment is succesfully.</p>
                    </div>
                </div>
                </div>

                <div className="flex flex-col space-y-10">
                    <h1 className="text-6xl font-bold text-white">Easily control your billing & invoicing.</h1>
                    <p className="text-slate-500 text-xl w-3/4">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
                         Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                         <div className="flex flex-row">
                            <div></div>
                            <div></div>
                         </div>
                </div>
            </section>

        </>
    )
}

export default Landingpage