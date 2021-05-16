import React, {createContext, useContext} from "react";

import useLocalStorageState from "../persistence/LocalStorage";

const TaskContext = createContext();

export function useTextListContext() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskListContext must be used within the TaskListContext")
  return context
}

export default function TaskListContext(props) {
  const stateManager = useLocalStorageState("tasks", []);
  return <TaskContext.Provider value={stateManager} {...props} />
}