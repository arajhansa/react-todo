import React from "react";

import TaskListElement from "./TaskListElement";

function TaskList({list}) {

    const items = (element) => <TaskListElement element={element} />

    return (
        <div className="w-4/5 m-auto mt-6">
            <ul className="space-y-6">
                {list.map(items)}
            </ul>
        </div>
    );
}

export default TaskList;
