import React from "react";
import { dummyData } from "./data/dummyData";
import Tab from "./Tab";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../index.css";

function tabs(props) {
  let route = props.match.path;
  return (
    <TransitionGroup>
      {dummyData.map(elem =>
        `/${elem.name.toLowerCase()}` === route ? (
          <CSSTransition in={true} appear={true} key={elem.name} classNames="fade" timeout={4000}>
            <Tab data={elem.subLinks} />
          </CSSTransition>
        ) : (
          ""
        )
      )}
    </TransitionGroup>
  );
}

export default tabs;
// you use group only for multiple in react transition group
