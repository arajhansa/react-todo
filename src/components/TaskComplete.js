import React from "react";

import {useTextListContext} from "../context/TaskListContext";

export default function TaskComplete() {
  const [list, setList] = useTextListContext();

  const clearCompletedTasks = () => {
    const incompleteTasks = list.filter(it => !it.isCompleted)
    setList([...incompleteTasks])
  }

  return (
      <div className="my-4 mt-auto mx-auto ">
          <button onClick={clearCompletedTasks}
                  className="py-2 px-3 border-2 border-gray-400 focus:outline-none rounded-md text-gray-600 hover:bg-gray-100 text-sm">
            Clear Completed
          </button>
      </div>
  );
}
