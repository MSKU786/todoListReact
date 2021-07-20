import React, { useEffect, useState } from 'react';
import dummy from "./dummy.js";
import List from "./List"
import "./dashboard.css"

function Dashboard(props) {
    const [data, setData] = useState(dummy);
    const addList = () => {
        let newId = "list"+data.length;
        let title =  "newList"
        const obj = {
            id: newId,
            title: title,
            cards: []
        }
        let updateData = [...data, obj];

        setData(updateData);
    }
    return (
        <div className="dashboard">
           
            {console.log(data)}
            {
                data.map((d) => {
                   return (<List key={d.id} listdata= {d}/>)
                }

                )}

            <div id="addList">
                
                <button onClick = {addList}> Add List</button>
            </div>
        </div>
    );
}

export default Dashboard;