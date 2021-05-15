import React from "react";
import DateBanner from "../components/DateBanner";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import useLocalStorageState from "../hooks/LocalStorage";
import TaskComplete from "../components/TaskComplete";

function Tasks() {
  const [list, setList] = useLocalStorageState("tasks", []);

  return (
      <div className="bg-gray-100 h-screen flex flex-col items-center">

        <div className="p-4 mt-16">
          <h1 className="text-3xl font-display">To-Do List App</h1>
        </div>

        <div className="bg-white h-2/3 w-2/3 max-w-md shadow-lg border rounded-md flex flex-col">
          <DateBanner/>
          <TaskInput list={list} setList={setList}/>
          <TaskList list={list} setList={setList}/>
          <TaskComplete list={list} setList={setList}/>
        </div>

      </div>
  );
}

export default Tasks;
