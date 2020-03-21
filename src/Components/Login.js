import React from 'react';
import {connect} from 'react-redux';
import {username,password,loggedin} from '../Actions/action';
import {Redirect} from 'react-router-dom';
import Dashboard from './Dashboard'


class Login extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.props
        if(username === "admin" && password === "admin"){
            this.props.dispatch(loggedin(true))
        }
    }

    render(){
        const {loggedin} = this.props;
        if(loggedin){
            return <Redirect to='/dashboard'/>
        }
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" placeholder="username" onChange={(e) => this.props.dispatch(username(e.target.value))} name="username" className="loginput"/>
                    <input type="text" placeholder="password" onChange={(e) => this.props.dispatch(password(e.target.value))} name="password" className="loginput"/>
                    <input type="submit" value="Login" className="logsubmit"/>
                </form>
            </div>
        )
    }
}

const mapStatetoProps = (state) => state.loginreducer
   
export default connect(mapStatetoProps)(Login);