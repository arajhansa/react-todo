import React, {useState} from "react";

import TaskInput from "./components/TaskInput";
import List from "./components/List";

function App() {

    const [list, setList] = useState([]);

    list.push({id:1, text: "Sample 1", isDeleted: false})
    list.push({id:1, text: "Sample 2", isDeleted: true})

    return (
        <div className="bg-green-100 h-screen flex justify-center items-center">
            <div className="bg-white h-2/3 w-2/3 max-w-md shadow-lg border rounded-md ">
                <TaskInput />
                <List list={list} />
            </div>
        </div>
    );
}

export default App;
