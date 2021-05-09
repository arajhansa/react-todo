import React from "react";

function TaskInput() {
    return (
        <div className="flex justify-around p-2">
            <input className="border-b-2 border-gray-300 p-2 focus:outline-none"/>
            <button className="border-2 bg-red-300 p-2 focus:outline-none hover:bg-blue-300">Add</button>
        </div>
    );
}

export default TaskInput;