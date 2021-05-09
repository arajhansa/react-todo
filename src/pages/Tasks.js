import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

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
        <div className="bg-green-100 h-screen flex justify-center items-center">
            <div className="bg-white h-2/3 w-2/3 max-w-md shadow-lg border rounded-md ">
                <TaskInput addTask={addTask} />
                <TaskList list={list} setList={setList}/>
            </div>
        </div>
    );
}

export default Tasks;
