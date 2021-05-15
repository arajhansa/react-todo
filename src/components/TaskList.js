import React from "react";

import TaskListElement from "./TaskListElement";

function TaskList({list, setList}) {

  const onCompleted = (element) => {
    const index = list.indexOf(element);
    list[index].isCompleted = !element.isCompleted;
    setList([...list]);
  };

  const onDeleted = (element) => {
    const index = list.indexOf(element)
    list.splice(index, 1)
    setList([...list])
  }

  return (
      <div className="w-4/5 m-auto mt-2 mb-6 flex overflow-hidden">
        <div className="overflow-y-auto pr-8 w-full">
          <ul className="space-y-6 w-full">
            {list.map((element) =>
                <TaskListElement
                    key={element.id}
                    element={element}
                    onCompleted={onCompleted}
                    onDeleted={onDeleted}
                />)}
          </ul>
        </div>
      </div>
  );
}

export default TaskList;
