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
        list.splice(index, 1)
        setList([...list])
    }

    const deleteCompletedTask = (event) => {
        const inCompletedTask = list.filter(it => !it.isCompleted)
        if (event && event.key === "Delete") setList([...inCompletedTask])
    }

    return (
        <div className="w-4/5 m-auto mt-6">
            <div onKeyPress={deleteCompletedTask} className="overflow-y-scroll h-96 pr-8">
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
        </div>
    );
}

export default TaskList;
