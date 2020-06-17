import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCog, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <ul className="toolbar-buttons">
        <ul className="upper-buttons">
          <button className="button" type="button">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="button" type="button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </ul>
        <ul className="lower-buttons">
          <button className="button" type="button">
            <FontAwesomeIcon icon={faCog} />
          </button>
          <button className="button" type="button">
            <FontAwesomeIcon icon={faUndoAlt} />
          </button>
        </ul>
      </ul>
    </div>
  );
};

Toolbar.defaultProps = {};

export default Toolbar;
