import React from "react";
import { useDrop } from "react-dnd";
import Square from "./Square";
import { ItemTypes } from "../modules/Constants";

const BoardSquare = ({ x, y, moveKnight, canKnightMove, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    canDrop: () => canKnightMove(x, y),
    drop: () => moveKnight(x, y),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  });

  const black = (x + y) % 2 === 1;

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
};

const Overlay = ({color}) => {
  
  const divStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: color,
  }

  return (
    <div
      style={divStyle}
    />
  );
};

export default BoardSquare;
