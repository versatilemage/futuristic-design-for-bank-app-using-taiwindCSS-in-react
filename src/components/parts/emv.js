import React from "react";

function Emv() {
    return (
        <>
            <div className="w-3/12 py-1 border border-white rounded-lg flex flex-col space-y-1">
                <div className="flex flex-row justify-between content-start">
                    <div className="bg-amber-500 p-1 mb-1 w-2/5"></div>
                    <div className="bg-amber-500 p-1 mt-1 w-2/5"></div>
                    <div className="bg-amber-500 p-1 mb-1 w-2/5"></div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" flex flex-col">
                        <div className="bg-amber-500 p-1 mb-1 w-2/5"></div>
                        <div className="bg-amber-500 p-1 mt-1 w-2/5"></div>
                    </div>
                    <div>
                        <span className="bg-amber-500 px-1 w-2/5"></span>
                    </div>
                    <div className=" flex flex-col">
                        <div className="bg-amber-500 p-1 mb-1 w-2/5"></div>
                        <div className="bg-amber-500 p-1 mt-1 w-2/5"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="bg-amber-500 p-1 mb-1 w-2/5"></div>
                    <div className="bg-amber-500 p-1 mt-1 w-2/5"></div>
                    <div className="bg-amber-500 p-1 mb-1 w-2/5"></div>
                </div>
            </div>
        </>
    )
}

export default Emv
