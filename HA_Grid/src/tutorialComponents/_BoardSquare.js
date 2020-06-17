import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../modules/Constants";

const BoardSquare = ({ x, y, moveToken, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TOKEN,
    drop: () => moveToken(x, y),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
    }),
  });

  return (
    <div className="board-square" ref={drop}>
      <div className="content">
        { children }
      </div>
      {isOver ? <Overlay /> : null}
    </div>
  );
};

const Overlay = ({color}) => {
  return (
    <div
      className="overlay"
    />
  );
};

export default BoardSquare;
