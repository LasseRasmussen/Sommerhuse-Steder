import React, { Component } from 'react'
import { Link } from "react-router-dom";
import auth from '../authorization/auth'

class TopMenu extends Component {

  constructor(props){
    super(props);
    this.state = {loggedIn: auth.loggedIn, userName:auth.userName,isUser:false,isAdmin:true}
  }

  loginStatus = (status,userName,isUser,isAdmin) =>{
    this.setState({loggedIn: status, userName,isUser,isAdmin});
  }

  componentDidMount(){
     auth.setLoginObserver(this.loginStatus);
  }

  render() {

    const logInStatus = this.state.loggedIn ? "Logged in as: " + this.state.userName : "";
    //console.log("RENDERING - REMOVE ME",JSON.stringify(this.state));
    return (
      <div>
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/" style={{pointerEvents: "none"}}>Semester Seed</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/about">About</Link></li>
              {this.state.loggedIn && this.state.isUser && (<li><Link to="/user">Page for Users </Link></li>)}
              {this.state.loggedIn && this.state.isUser && (<li><Link to="/random">Random Number </Link></li>)}
              {this.state.loggedIn && this.state.isAdmin && (<li><Link to="/admin">Page for Admins</Link></li>)}
              {this.state.loggedIn && this.state.isAdmin && (<li><Link to="/userlist">List of Users</Link></li>)}
              {this.state.loggedIn && (<li><Link to="/locations">Locations</Link></li>)}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="navbar-text" style={{ color: "steelBlue" }}>{logInStatus}</li>
              {!this.state.loggedIn && (<li><Link to="/register">Register</Link></li>)}
              <li>
                {this.state.loggedIn ?
                  (
                    <Link to="/logout"><span className="glyphicon glyphicon-log-in"></span> Logout</Link>
                  ) :
                  (
                    <Link to="/login">
                      <span className="glyphicon glyphicon-log-out"></span> Login </Link>
                  )}
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}


  export default TopMenu;
