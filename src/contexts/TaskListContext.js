import React, {createContext} from "react";
import useLocalStorageState from "../hooks/LocalStorage";

export const TaskContext = createContext();

export default function TaskListContext(props) {
  const stateManager = useLocalStorageState("tasks", []);
  return <TaskContext.Provider value={stateManager} {...props} />
}