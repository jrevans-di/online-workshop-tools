import React, { useEffect } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend'

import Token from "./Token.jsx";
import { ItemTypes } from "../js/ItemTypes";

const getStyle = (left, top, isDragging) => {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    transform,
    WebkitTransform: transform,
    display: isDragging ? "none" : "block",
  };
};

const DraggableToken = ({ id, title, category, left, top }) => {

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.TOKEN, id, left, top, title, category },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const img = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  return (
    <div className="token" ref={drag} style={getStyle(left, top, isDragging)}>
    <DragPreviewImage connect={preview} src={img} />
      <Token title={title} category={category} />
    </div>
  );
};

DraggableToken.defaultProps = {
  title: "Lorem Ipsum",
  left: 0,
  top: 0,
};

export default DraggableToken;
