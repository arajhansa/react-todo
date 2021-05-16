import React from "react";
import DateBanner from "../components/DateBanner";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import TaskComplete from "../components/TaskComplete";
import TaskListContext from "../contexts/TaskListContext";

function Tasks() {
  return (
      <div className="bg-gray-100 h-screen flex flex-col items-center">

        <div className="p-4 mt-16">
          <h1 className="text-3xl font-display">To-Do List App</h1>
        </div>

        <div className="bg-white h-2/3 w-4/5 max-w-md shadow-lg border rounded-md flex flex-col">
          <TaskListContext>
            <DateBanner/>
            <TaskInput/>
            <TaskList/>
            <TaskComplete/>
          </TaskListContext>
        </div>

      </div>
  );
}

export default Tasks;
