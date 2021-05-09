import React from "react";

import TaskListElement from "./TaskListElement";

function TaskList({list, setList}) {

    const onCompleted = (event, element) => {
        const index = list.indexOf(element);
        list[index].isCompleted = event.target.checked;
        setList([...list]);
    };

    const onDeleted = (element) => {
        const index = list.indexOf(element)
        list.splice(index,1)
        setList([...list])
    }

    return (
        <div className="w-4/5 m-auto mt-6">
            <ul className="space-y-6">
                {list.map((element) =>
                    <TaskListElement
                        key={element.id}
                        element={element}
                        onCompleted={onCompleted}
                        onDeleted={onDeleted}
                    />)}
            </ul>
        </div>
    );
}

export default TaskList;
