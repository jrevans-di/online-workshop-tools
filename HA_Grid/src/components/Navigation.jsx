import React from "react";

const Navigation = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="inner-header">
          <div className="header-left">
          </div>
          <div className="header-right">
            <nav>Navigation menu goes here</nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const Logotype = ({ tool }) => (
  <h1 className="logotype">
    Workshopp<span>ed</span>: {tool}
  </h1>
);

Navigation.defaultProps = {};

export default Navigation;
