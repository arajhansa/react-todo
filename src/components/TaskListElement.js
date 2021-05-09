import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

function TaskListElement({element}) {
    return (
        <li key={element.id} className={element.isDeleted && "text-gray-400 line-through"}>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <input type="checkbox" defaultChecked={element.isDeleted} />
                    <p className="ml-4">{element.text}</p>
                </div>
                <span className="cursor-pointer"><TrashIcon className="h-5 w-5 text-gray-500"/></span>
            </div>
        </li>
    );
}

export default TaskListElement;