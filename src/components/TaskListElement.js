import React, {useContext} from "react";
import {TrashIcon} from "@heroicons/react/outline";
import {TaskContext} from "../contexts/TaskListContext";

function TaskListElement({element}) {
  const [list, setList] = useContext(TaskContext)

  const onCompleted = () => {
    const index = list.indexOf(element);
    list[index].isCompleted = !element.isCompleted;
    setList([...list]);
  };

  const onDeleted = () => {
    const index = list.indexOf(element)
    list.splice(index, 1)
    setList([...list])
  }

  return (
      <li className={element.isCompleted ? "text-gray-400 line-through" : ""}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <input type="checkbox"
                   checked={element.isCompleted}
                   onChange={() => onCompleted()}
            />
            <p className="ml-4 cursor-pointer" onClick={() => onCompleted()}>{element.text}</p>
          </div>
          <span onClick={() => onDeleted()} className="cursor-pointer">
                    <TrashIcon className="h-5 w-5 text-gray-500"/>
                </span>
        </div>
      </li>
  );
}

export default TaskListElement;
