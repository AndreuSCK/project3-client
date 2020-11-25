import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Home extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;

    return (
      <main id="homeID">
        <h1 className="whiteBoardTitle">
          TRIGMA
        </h1>
        <h2>
          Your canvas
          {/* {this.props.user.username} */}
        </h2>
        <div id="canvasAvailableID">
          <Link to="/canvas">
            <button className="canvas-button">Lista de la compra</button>
          </Link>
          <Link to="/canvas">
            <button className="canvas-button">Proyecto patatas</button>
          </Link>

          <Link to="/new">
            <button id="addCanvasButton" >+</button>
          </Link>
        </div>
        <Link to="/gallery">
          <button >Canvas Gallery</button>
        </Link>
        <Link to="/profile">
          <button >Profile</button>
        </Link>

        <button onClick={logout} >Logout</button>

      </main>
    )
  }
}




export default withAuth(Home);