import React from "react";
import { ItemTypes } from '../modules/Constants'
import { useDrag } from 'react-dnd'

const Token = ({ text, shareList, showShareList }) => {

  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.TOKEN },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const shareListItems = shareList.map((item, i) => {
    const checkboxId = "checkbox" + i;
    return (
      <li className="checkbox" key={i}>
        <input type="checkbox" id={checkboxId} />
        <label htmlFor={checkboxId}>{item}</label>
      </li>
    );
  });

  return (
    <div className="token" ref={drag} style={{display: isDragging ? "none" : "inline"}}>
      <p className="token-text">{text}</p>
      {showShareList ? <ul className="share-list">{shareListItems}</ul> : null}
    </div>
  );
};

Token.defaultProps = {
  text: "Lorem Ipsum",
  shareList: [
    "Myself",
    "Friends and Family",
    "Organisation",
    "Third Parties",
    "Government",
  ],
  showShareList: false
}

export default Token;
