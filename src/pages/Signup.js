import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div id="idSignupAndLogin">
        <h1 className="whiteBoardTitle">
          vuoto
        </h1>


        <div className="signupLoginLinks">
          <Link to='/login'>
            <button className=''>Login</button>
          </Link>
          <br />
          <Link to='/signup'>
            <button className='activeButton'>Sign Up</button>
          </Link>
        </div>


        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />

          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          {
            this.props.message ?
              this.props.message : <> </>
          }
          <input className="submit" type='submit' value='SIGNUP' />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
