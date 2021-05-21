import React, {createContext, useContext} from "react";

import {useDateTaskListContext} from "./DateContext";

const TaskContext = createContext();

export function useTextListContext() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskListContext must be used within the TaskListContext")
  return context
}

export default function TaskListContext(props) {
  const [date, list, setList] = useDateTaskListContext();

  const taskList = list[date] || []
  const setTaskList = (newList) => {
    list[date] = newList
    setList({...list})
  }

  return <TaskContext.Provider value={[taskList, setTaskList]} {...props} />
}