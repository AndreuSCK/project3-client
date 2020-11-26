import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class NewCanvas extends Component {
    crearNuevo = () => {
        // this.props.signup({ username, password });
        console.log("jaja")
        // console.log(this.props)
        this.props.newCanvas({ author: this.props.user._id, name: "patatasaa", gridSize: [2], canvasData: [["data"]] });
        // console
    }
    render() {
        return (
            <div id="newCreate">
                <h1>Create new Canvas {this.props.user.username}</h1>
                <button onClick={this.crearNuevo} >Create new</button>
            </div>
        );
    }
}

export default withAuth(NewCanvas);
