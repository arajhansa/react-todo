import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Tasks() {
    const [list, setList] = useState([]);

    const addTask = (text) => {
        const element = {
            id: uuidv4(),
            isCompleted: false,
            text: text
        }
        setList([...list, element])
    }

    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <div className="p-4">
                <h1 className="text-3xl font-display">To-Do List App</h1>
            </div>

            <div className="bg-white h-2/3 w-2/3 max-w-md shadow-lg border rounded-md ">
                <TaskInput addTask={addTask}/>
                <TaskList list={list} setList={setList}/>
            </div>
        </div>
    );
}

export default Tasks;
