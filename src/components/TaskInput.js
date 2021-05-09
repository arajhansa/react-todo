import React, {useRef} from "react";

function TaskInput({addTask}) {
    const inputRef = useRef();

    const addNewTask = (event) => {
        if (event && event.key !== "Enter") return

        addTask(inputRef.current.value)
        inputRef.current.value = ""
    }


    return (
        <div className="flex justify-around p-2">
            <input ref={inputRef} onKeyPress={(event => {
                addNewTask(event)
            })} placeholder="Enter To-Do Task" className="border-b-2 border-gray-300 p-2 focus:outline-none"/>
            <button className="border-2 bg-red-300 p-2 focus:outline-none hover:bg-blue-300"
                    onClick={addNewTask}>Add
            </button>
        </div>
    );
}

export default TaskInput;
