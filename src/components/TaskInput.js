import React, {useContext, useRef} from "react";
import {MenuAlt2Icon} from "@heroicons/react/outline";
import {TaskContext} from "../contexts/TaskListContext";

function TaskInput() {
  const [list, setList] = useContext(TaskContext)
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
        <div className="border-b-2 border-gray-300 flex items-center">
          <MenuAlt2Icon className="h-5 w-5 mx-2 text-gray-600"/>
          <input ref={inputRef} onKeyPress={addNewTask}
                 placeholder="Add a Task"
                 className=" flex w-36 sm:w-72 p-2 focus:outline-none"/>
        </div>
      </div>
  );
}

export default TaskInput;
