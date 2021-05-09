import React from "react";

function App() {
    return (
        <div className="bg-green-100 h-screen flex justify-center items-center">
            <div className="bg-white h-2/3 w-2/3 max-w-md shadow-lg border rounded-md ">
                <div className="flex justify-around p-2">
                    <input className="border-b-2 border-gray-300 p-2 focus:outline-none"/>
                    <button className="border-2 bg-red-300 p-2 focus:outline-none hover:bg-blue-300">Add</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default App;
