import React from "react";

const Grid = ({ children }) => {
  const rows = 12;
  const cols = 12;
  const xLabel = "Should the data be anonymised or identified?";
  const yLabel = "Do I want to share this data?";

  return (
    <div className="grid">
      <div className="tokens">{children}</div>
      <div className="inner-grid">
        <GridAxes xLabel={xLabel} yLabel={yLabel} />
        <GridSquares rows={rows} cols={cols} />
        <GridZones />
      </div>
    </div>
  );
};

const GridSquare = ({ index, x, y }) => {
  return <div className="square"></div>;
};

const GridSquares = ({ rows, cols }) => {
  const nCells = rows * cols;

  const renderSquare = (i) => {
    const x = i % rows;
    const y = Math.floor(i / cols);
    return <GridSquare key={i} index={i} x={x} y={y} />;
  };

  const renderSquares = (n) => {
    let _squares = [];
    for (let i = 0; i < n; i++) {
      _squares.push(renderSquare(i));
    }
    return _squares;
  };

  return <div className="grid-squares">{renderSquares(nCells)}</div>;
};

const GridAxes = ({ xLabel, yLabel }) => {
  return (
    <div className="axes">
      <div className="x-axis">
        <p>{"← " + xLabel + " →"}</p>
      </div>
      <div className="y-axis">
        <p>{"← " + yLabel + " →"}</p>
      </div>
    </div>
  );
};

const GridZones = () => {
  const onHover = (e) => {
    const zone = e.target.parentElement.parentElement;
    zone.classList.add("overlay");
  };

  const endHover = (e) => {
    const zone = e.target.parentElement.parentElement;
    zone.classList.remove("overlay");
  };

  return (
    <div className="grid-zones">
      <div className="zone h-always">
        <div className="label left">
          <p onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => endHover(e)}>
            ↓ Always ↓
          </p>
        </div>
      </div>
      <div className="zone h-maybe">
        <div className="label left">
          <p onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => endHover(e)}>
            ↓ Maybe ↓
          </p>
        </div>
      </div>
      <div className="zone h-never">
        <div className="label left">
          <p onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => endHover(e)}>
            ↓ Never ↓
          </p>
        </div>
      </div>
      <div className="zone v-anonymise">
        <div className="label bottom">
          <p onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => endHover(e)}>
            ↑ Anonymised ↑
          </p>
        </div>
      </div>
      <div className="zone v-identify">
        <div className="label bottom">
          <p onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => endHover(e)}>
            ↑ Identified ↑
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
