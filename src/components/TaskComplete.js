import React from "react";

import {useTextListContext} from "../context/TaskListContext";

export default function TaskComplete() {
  const [list, setList] = useTextListContext();

  const clearCompletedTasks = () => {
    const incompleteTasks = list.filter(it => !it.isCompleted)
    setList([...incompleteTasks])
  }

  const clearAllTasks = () => {
    setList([])
  }

  return (
      <div className="my-4 mt-auto mx-auto">
        <button onClick={clearCompletedTasks}
                className="mr-2 py-2 px-3 border-2 border-gray-400 focus:outline-none rounded-md text-gray-600 hover:bg-gray-100 text-sm">
          Clear Completed
        </button>
        <button onClick={clearAllTasks}
                className="ml-2 py-2 px-3 bg-gray-200 border-2 border-gray-400 focus:outline-none rounded-md text-gray-600 hover:bg-gray-100 text-sm">
          Clear All
        </button>
      </div>
  );
}
