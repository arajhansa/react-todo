import React, {useContext} from "react";

import TaskListElement from "./TaskListElement";
import {TaskContext} from "../contexts/TaskListContext";

function TaskList() {
  const [list] = useContext(TaskContext)

  return (
      <div className="w-4/5 m-auto mt-2 mb-6 flex overflow-hidden">
        <div className="overflow-y-auto pr-8 w-full">
          <ul className="space-y-6 w-full">
            {list.map(element => <TaskListElement key={element.id} element={element}/>)}
          </ul>
        </div>
      </div>
  );
}

export default TaskList;
