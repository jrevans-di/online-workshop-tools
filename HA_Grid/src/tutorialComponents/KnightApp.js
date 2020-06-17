import React, { useState } from "react";
import Board from "./Board";

function KnightApp() {

  const [knightPosition, setKnightPosition] = useState([1, 7]);
  const moveKnight = (toX, toY) => {
    setKnightPosition([toX, toY]);
  };

  const canKnightMove = (toX, toY) => {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  return (
    <div className="App">
      <Board
        knightPosition={knightPosition}
        moveKnight={moveKnight}
        canKnightMove={canKnightMove}
      />
    </div>
  );
}

export default KnightApp;
