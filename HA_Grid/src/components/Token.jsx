import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faQuestion } from "@fortawesome/free-solid-svg-icons";

const Token = ({ title, category }) => {

  const getIcon = (category) => {
    if (category.toLowerCase() === "property") {
      return <FontAwesomeIcon icon={faHome} />
    } else if (category.toLowerCase() === "personal") {
       return <FontAwesomeIcon icon={faUser} />
    } else {
      return <FontAwesomeIcon icon={faQuestion} />
    }
  }

  return (
    <div className={"inner-token " + category.toLowerCase()}>
      {getIcon(category)}
      <p className="token-text">{title}</p>
    </div>
  );
};

Token.defaultProps = {
  title: "No Title",
  category: "",
};

export default Token;
