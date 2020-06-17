import React from "react";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="inner-navigation">
          <div className="nav-left">
          </div>
          <div className="nav-right">
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
