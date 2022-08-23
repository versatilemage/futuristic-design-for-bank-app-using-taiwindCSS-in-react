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
            <section className="grid grid-cols-2 scroll-smooth my-8 mt-10 items-center">
                <div className="flex flex-col space-y-4">
                    <div className="uppercase bg-stone-900 space-x-1 rounded-lg text-center py-2 w-2/4">
                        <span className="text-white">20%</span>
                        <span className="text-slate-400">discount for </span>
                        <span className="text-white">1 month</span>
                        <span className="text-slate-400">account</span>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-7xl font-semibold capitalize text-white">the next</h2>
                        <h2 className="text-7xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-slate-100">generation</h2>
                        <h2 className="text-7xl font-semibold capitalize text-white">payment method</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="rounded-full w-1/12 p-14 bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-300 "></div>
                    <div className="ml-32">
                        <div className="absolute blur-3xl opacity-20 border-l-[300px] border-l-transparent border-t-[500px] border-t-slate-300 border-r-[300px] border-r-transparent py-64"></div>
                        {/* <div className="bg-slate-400 opacity-40 rounded-xl px-2 py-10 w-3/12 h-36 skew-y-[-20deg] skew-x-[10deg] absolute grid grid-cols-3 rotate-[-1deg]">
                            <div className="bg-sky-300 relative mt-[-40px] mb-[-40px] ml-[-10px] w-3/4 rounded-l-xl"></div>
                            <div className="relative mt-[-40px] mb-[-40px] bg-slate-400 rounded-r-xl">
                                <h2 className="text-lg font-bold text-white">1833 7163 3892 1028</h2>
                            </div>
                            <div className="text-lg font-bold bg-red-200 absolute">
                                <span className="text-white capitalize">hoo</span>
                                <span className="text-sky-300 capitalize">bank</span>
                            </div>
                        </div> */}

                        <div className="absolute w-2/12 h-46 grid flex flex-col rounded-xl">
                            <div className="bg-slate-500 relative w-full px-10 py-28 rounded-t-xl opacity-40 flex flex-col items-start">
                            <div className="text-lg font-bold mt-[-5em] space-x-1">
                                <span className="text-white capitalize">hoo</span>
                                <span className="text-sky-300 capitalize">bank</span>
                            </div>
                                <h2 className="text-base text-white font-black rotate-[90deg] mt-[5em] ml-[5em] w-full">1833 7163 3892 1028</h2>
                            </div>
                            <div className="bg-sky-400 relative w-full px-10 py-12 rounded-b-xl opacity-40">
                                <Emv />
                            </div>
                        </div>

                        {/* <div className="bg-slate-200 opacity-10 rounded-xl px-2 py-10 w-9/12 h-36 skew-y-[-25deg] skew-x-[10deg] grid grid-cols-2 rotate-[-2deg] mt-20">
                            <div className="bg-sky-400 relative mt-[-40px] mb-[-40px] ml-[-10px] w-3/4 rounded-l-xl"></div>
                            <div className="relative mt-[-40px] mb-[-40px] bg-slate-200 rounded-r-xl"></div>
                        </div>

                        <div className="bg-slate-200 opacity-10 rounded-xl px-2 py-10 w-9/12 h-36 skew-y-[-25deg] skew-x-[10deg] grid grid-cols-2 rotate-[-2deg] mt-5">
                            <div className="bg-sky-400 relative mt-[-40px] mb-[-40px] ml-[-10px] w-3/4 rounded-l-xl"></div>
                            <div className="relative mt-[-40px] mb-[-40px] bg-slate-200 rounded-r-xl"></div>
                        </div> */}
                    </div>
                    <div className="bg-robot-hand w-full py-56 bg-contain bg-no-repeat ml-32 mt-32"></div>
                </div>
            </section>
        </>
    )
}

export default Landingpage