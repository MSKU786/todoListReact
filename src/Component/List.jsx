import React, { useState } from 'react';
import Card from "./Card";
import  "./list.css";
function List({listdata}) {
    const [card, setCard] = useState(listdata.cards);
    const addCard = () => {
        let newId = listdata.id+"card"+ card.length;
        let title =  "New Card"
        const obj = {
            id: newId,
            title: title,
          
        }
        let updateData = [...card, obj];

        setCard(updateData);
    }
    return (
        <div id="listContainer">
            <div id="card">
                <div id>
                    {listdata.title}

                </div>
                <div>
                    {card.map((c)=>{
                        return (<Card  cardData={c}/>)
                    })}
                </div>
            </div>
            <div id="addCard"> 
                <button onClick = {addCard}> Add Card</button>
            </div>
            
        </div>
    );
}

export default List;