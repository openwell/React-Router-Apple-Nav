import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Tab from "./components/Tab";
import uuid from "uuid/v1";

class App extends Component {
  render() {
    const routers = [
      {
        name: "Home",
        link: "/",
        component: ''
      },
      {
        name: "Mac",
        link: "/mac"
      },
      {
        name: "iPad",
        link: "/ipad"
      },
      {
        name: "iPhone",
        link: "/iphone"
      },
      {
        name: "Watch",
        link: "/watch"
      },
      {
        name: "Tv",
        link: "/tv"
      },
      {
        name: "Music",
        link: "/music"
      },
      {
        name: "Support",
        link: "/support"
      }
    ];

    return (
      <div className="App">
        <Router>
        <ul className='nav'>
            {routers.map(elem => {
              return (
                <Link key={uuid()} to={elem.link}>
                  {elem.name}
                </Link>
              );
            })}
          </ul>
          <Switch>
            <Route path="/" exact component={Tab} />
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
