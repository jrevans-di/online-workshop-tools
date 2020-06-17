import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Token from "./Token";
import BoardSquare from "./BoardSquare";

const Board = ({ rows, cols, tokenPosition, moveToken }) => {
  const cells = rows * cols;
  const squares = [];

  const renderSquare = (i) => {
    const x = i % rows;
    const y = Math.floor(i / cols);
    return (
      <div
        key={i}
        style={{width: 100 / rows + "%", height: 100 / rows + "%" }}
      >
        <BoardSquare x={x} y={y} moveToken={moveToken}>
          {renderToken(x, y, tokenPosition)}
        </BoardSquare>
      </div>
    );
  };

  const renderToken = (x, y, [tokenX, tokenY]) => {
    if (x === tokenX && y === tokenY) {
      return <Token />;
    }
  };

  for (let i = 0; i < cells; i++) {
    squares.push(renderSquare(i));
  }

  return (
    <div className="board">
      <div className="container">
        <div className="inner-board">
          <DndProvider backend={HTML5Backend}>
            <div className="board-squares">{squares}</div>
          </DndProvider>
        </div>
      </div>
    </div>
  );
};

Board.defaultProps = {
  rows: 20,
  cols: 20,
  tokenPosition: [0, 0],
};

export default Board;
