import React from "react";
import {useState} from "react";

import TaskListElement from "./TaskListElement";

function TaskList() {
    const [list, setList] = useState([]);

    console.log("rendered");

    const onCompleted = (event, element) => {
        const index = list.indexOf(element);
        list[index].isCompleted = event.target.checked;
        console.log(list);
        setList([...list]);
    };

    return (
        <div className="w-4/5 m-auto mt-6">
            <ul className="space-y-6">
                {list.map((element) => <TaskListElement
                    key={element.id}
                    element={element}
                    onCompleted={onCompleted}
                />)}
            </ul>
        </div>
    );
}

export default TaskList;
