import React from "react";

function TaskListElement({element}) {
    return (
        <li key={element.id} className={element.isDeleted && "text-gray-400 line-through"}>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <input type="checkbox" defaultChecked={element.isDeleted} />
                    <p className="ml-4">{element.text}</p>
                </div>
                <button>Delete</button>
            </div>
        </li>
    );
}

export default TaskListElement;