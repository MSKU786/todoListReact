import React, { useState } from 'react';
import Modify from "./Modify";
import "./card.css"
function Card({cardData}) {

    const [modify, setModify] = useState(false);
    console.log("is this correvty",cardData);
    const showPopup = () => {
        setModify(!modify);
    }
    return (
        <div >
            <div id="cardData" >
                {cardData.title}
            </div>
            {
                modify && <Modify info={cardData} /> }
        </div>
      
    );
}

export default Card;