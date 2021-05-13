import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

function TaskListElement({element, onCompleted, onDeleted}) {

    return (
        <li className={element.isCompleted ? "text-gray-400 line-through" : ""}>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <input type="checkbox"
                           checked={element.isCompleted}
                           onChange={event => onCompleted(event, element)}
                    />
                    <p className="ml-4">{element.text}</p>
                </div>
                <span onClick={() => onDeleted(element)} className="cursor-pointer">
                    <TrashIcon className="h-5 w-5 text-gray-500"/>
                </span>
            </div>
        </li>
    );
}

export default TaskListElement;
