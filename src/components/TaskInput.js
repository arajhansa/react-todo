import React, {useRef} from "react";
import {PlusCircleIcon} from "@heroicons/react/outline";

function TaskInput({list, setList}) {
  const inputRef = useRef();

  const addNewTask = (event) => {
    if (event && event.key !== "Enter") return
    if (inputRef.current.value === "") return
    const element = {
      id: Date.now().toString(),
      isCompleted: false,
      text: inputRef.current.value
    }
    setList([...list, element])
    inputRef.current.value = ""
  }

  return (
      <div className="flex justify-around py-8 items-center">
        <input ref={inputRef} onKeyPress={addNewTask}
               placeholder="Enter To-Do Task"
               className="border-b-2 border-gray-300 p-2 focus:outline-none"/>

        <span onClick={() => addNewTask()} className="cursor-pointer">
                    <PlusCircleIcon className="h-8 w-8 text-green-300"/>
            </span>
      </div>
  );
}

export default TaskInput;
