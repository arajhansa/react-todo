import React from "react";

import ListElement from "./ListElement";

function List({list}) {

    const items = (element) => <ListElement element={element} />

    return (
        <div className="w-4/5 m-auto mt-6">
            <ul className="space-y-6">
                {list.map(items)}
            </ul>
        </div>
    );
}

export default List;
