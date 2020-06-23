import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faArrowCircleLeft,
  faArrowCircleRight,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({
  scenarioIndex,
  scenario,
  incrementScenario,
  decrementScenario,
}) => {

  const [showDescription, setShowDescription] = useState(false);

  const toggleShowDescription = () => {
    setShowDescription(!showDescription)
  };

  return (
    <div className="header">
      <div className="container">
        <div className="inner-header">
          <div className="button-container">
            <button className="prev-button" onClick={() => decrementScenario()}>
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </button>
          </div>
          <div className="scenario">
            <h1 className="title">
              <span>Scenario {scenarioIndex + 1}. </span>
              {scenario.title}
            </h1>
            <div className="button-container">
              <button className="info-button" onClick={()=>{toggleShowDescription()}}>
                <FontAwesomeIcon icon={faInfoCircle} />
              </button>
            </div>
            <div
              className={
                showDescription
                  ? "floating-window show"
                  : "floating-window hide"
              }
            >
              <div className="controls">
                <div className="button-container">
                  <button className="close-button">
                    <FontAwesomeIcon icon={faTimesCircle} onClick={()=>{toggleShowDescription()}}/>
                  </button>
                </div>
              </div>
              <div className="content">
                <h1>{scenario.title}</h1>
                <p>{scenario.description}</p>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="next-button" onClick={() => incrementScenario()}>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  scenario: {
    title: "Default Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
};

export default Header;
