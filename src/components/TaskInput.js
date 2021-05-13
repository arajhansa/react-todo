import React, {useRef} from "react";
import {PlusCircleIcon} from "@heroicons/react/outline";

function TaskInput({addTask}) {
    const inputRef = useRef();

    const addNewTask = (event) => {
        if (event && event.key !== "Enter") return
        if (inputRef.current.value === "") return
        addTask(inputRef.current.value)
        inputRef.current.value = ""
    }

    return (
        <div className="flex justify-around py-8 items-center">
            <input ref={inputRef} onKeyPress={addNewTask}
                   placeholder="Enter To-Do Task"
                   className="border-b-2 border-gray-300 p-2 focus:outline-none"/>

            <span onClick={addNewTask} className="cursor-pointer">
                    <PlusCircleIcon className="h-8 w-8 text-green-300"/>
            </span>
        </div>
    );
}

export default TaskInput;
