import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
const links = [{to: "/", title: "Overview"},{to: "/transactions", title: "Transactions"}, {to: "/profile", title: "Settings"}, {to: "/logout", title: "Logout"}];

class Carousel extends React.Component {
  constructor() {
    super();
  }
  getDots(links){
    var dots = [];
    var lastIndex = links.length - 1;
    for (var i = 0; i < lastIndex; i++) {
      dots.push(
        <div key={i} className="active"><Link to={links[i].to}>{links[i].title}</Link></div>
      );
    }
    dots.push(
      <div key={lastIndex} className="active" id="logoutButton"><Link to={links[lastIndex].to}>{links[lastIndex].title}</Link></div>
    );
    return dots;
  }
  render() {
    return (
      <div id="carousel">
        <div className="cell">
          <ul className="dots">
            {this.getDots(links)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Carousel;
