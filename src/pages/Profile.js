import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import service from '../lib/auth-service';


class Profile extends Component {
        componentDidMount(){service.saveImagetoUser}

    render() {
        const {logout} = this.props
        return (
            <div id="profile">
                <h1>PROFILE</h1>
                <div>
                    {/* <img src={this.props.user.image}/> */}
                    {this.props.user.image ? <img src={this.props.user.image}/> : <img src={'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'}/>}
                    <p>{this.props.user.username}</p>
                </div>
                
                <button onClick={logout} >Logout</button>

            </div>
        )
    }
}

export default withAuth(Profile)