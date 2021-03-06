import React from "react";

import DateBanner from "../components/DateBanner";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import TaskComplete from "../components/TaskComplete";
import TaskListContext from "../context/TaskListContext";
import {DateProviderContext} from "../context/DateContext";

function Tasks() {
  return (
      <div className="bg-gray-100 h-screen flex flex-col items-center">

        <div className="p-4 mt-16">
          <h1 className="text-3xl font-display">To-Do List App</h1>
        </div>

        <div className="bg-white h-2/3 sm:h-3/4 w-4/5 max-w-md shadow-lg border rounded-md flex flex-col">
          <DateProviderContext>
            <DateBanner/>
            <TaskListContext>
              <TaskInput/>
              <TaskList/>
              <TaskComplete/>
            </TaskListContext>
          </DateProviderContext>
        </div>

      </div>
  );
}

export default Tasks;
