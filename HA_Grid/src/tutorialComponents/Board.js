import React from "react";
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Board = ({ knightPosition, moveKnight, canKnightMove }) => {
  const renderSquare = (i, [knightX, knightY]) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare
          x={x}
          y={y}
          moveKnight={moveKnight}
          canKnightMove={canKnightMove}
        >
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    );
  };

  const renderPiece = (x, y, [knightX, knightY]) => {
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  };

  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100vw",
          height: "100vw",
          display: "flex",
          flexWrap: "wrap",
          fontSize: "10vw",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

export default Board;
