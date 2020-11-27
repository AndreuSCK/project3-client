import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Home extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;

    return (
      <main id="homeID">
        <h1 className="whiteBoardTitle">
          vuoto
        </h1>
        <h2>
          Welcome back, {this.props.user.username}
        </h2>
        <div id="canvasAvailableID">
          <Link to="/canvas/1">
            <button className="canvas-button">Proyecto patatas</button>
          </Link>
          <Link to="/canvas/2">
            <button className="canvas-button">Proyect pollo</button>
          </Link>

          <Link to="/canvas/new">
            <button id="addCanvasButton" >+</button>
          </Link>
        </div>
        {/* <Link to="/gallery">
          <button >Canvas Gallery</button>
        </Link> */}
        <div style={{ display: "flex" }}>
          <Link to="/profile">
            <button className="profileLogout">Profile</button>
          </Link>

          <button className="profileLogout" onClick={logout} >Logout</button>
        </div>

      </main>
    )
  }
}




export default withAuth(Home);