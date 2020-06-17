import React, { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { update } from "immutability-helper";

import DraggableToken from "./DraggableToken.jsx";
import Grid from "./Grid.jsx";
import Toolbar from "./Toolbar.jsx";

import { ItemTypes } from "../js/ItemTypes";
import { snapToGrid as doSnapToGrid } from "../js/snapToGrid";

const renderToken = (props, key) => {
  return <DraggableToken key={key} id={key} {...props} />;
};

const Workspace = ({ snapToGrid }) => {
  const [tokens, setTokens] = useState([
    { top: 0, left: 825, title: "Electricty use", category: "property" },
    { top: 80, left: 825, title: "Water use", category: "property" },
    { top: 160, left: 825, title: "Financial income", category: "personal" },
    { top: 240, left: 825, title: "Repairs history", category: "property" },
    { top: 320, left: 825, title: "External C.C.T.V.", category: "property" },
    { top: 400, left: 825, title: "Landline use", category: "personal" },
    { top: 480, left: 825, title: "Internet speed", category: "property" },
    { top: 560, left: 825, title: "Internet history", category: "personal" },
    { top: 640, left: 825, title: "Medical info", category: "personal" },
  ]);

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
          <Toolbar />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
