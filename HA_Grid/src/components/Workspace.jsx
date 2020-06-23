import React, { useState } from "react";
import { useDrop } from "react-dnd";

import DraggableToken from "./DraggableToken.jsx";
import Grid from "./Grid.jsx";
import Toolbar from "./Toolbar.jsx";

import { ItemTypes } from "../js/ItemTypes";

const renderToken = (props, key) => {
  return <DraggableToken key={key} id={key} {...props} />;
};

const Workspace = ({ snapToGrid }) => {

  const tokenInitalState = [
    { top: 0, left: 770, title: "Energy use", category: "property" },
    { top: 70, left: 770, title: "Water use", category: "property" },
    { top: 140, left: 770, title: "Repairs history", category: "property" },
    { top: 210, left: 770, title: "External C.C.T.V.", category: "property" },
    { top: 280, left: 770, title: "Internet speed", category: "property" },
    { top: 350, left: 770, title: "Carbon monoxide levels", category: "property" },
    { top: 0, left: 900, title: "Financial income", category: "personal" },
    { top: 70, left: 900, title: "Job status", category: "personal" },
    { top: 140, left: 900, title: "Internet history", category: "personal" },
    { top: 210, left: 900, title: "Health info", category: "personal" },
    { top: 280, left: 900, title: "Home occupancy", category: "personal" },
    { top: 350, left: 900, title: "Mobile phone use", category: "personal" },
    { top: 420, left: 900, title: "Tenant location", category: "personal" },
  ];

  const [tokens, setTokens] = useState(tokenInitalState);

  const resetTokens = () => {
    setTokens(tokenInitalState)
  };

  const [, drop] = useDrop({
    accept: ItemTypes.TOKEN,
    drop(token, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      let id = token.id;
      let newLeft = Math.round(token.left + delta.x);
      let newTop = Math.round(token.top + delta.y);
      setTokens((tokens) => {
        const newTokens = tokens.map((token, i) => {
          if (i === id) {
            return {...token, top:newTop, left:newLeft}
          } else {
            return token;
          }
        })
        return newTokens;
      })
      return undefined;
    },
  });

  const renderedTokens = tokens.map((token, i) => renderToken(token, i));

  return (
    <div className="workspace" ref={drop}>
      <div className="container" >
        <div className="inner-workspace" >
          <Grid >
            {renderedTokens}
          </Grid>
          <Toolbar resetTokens={resetTokens} />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
