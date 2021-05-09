import React from "react";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Tasks() {

    return (
        <div className="bg-green-100 h-screen flex justify-center items-center">
            <div className="bg-white h-2/3 w-2/3 max-w-md shadow-lg border rounded-md ">
                <TaskInput />
                <TaskList />
            </div>
        </div>
    );
}

export default Tasks;
