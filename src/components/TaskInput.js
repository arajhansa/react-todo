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
      <div className="flex flex-col justify-around py-8 items-center">
        <input ref={inputRef} onKeyPress={addNewTask}
               placeholder="Enter To-Do Task"
               className="border-b-2 flex mx-4 w-48 sm:w-auto border-gray-300 p-2 focus:outline-none"/>
      </div>
  );
}

export default TaskInput;
