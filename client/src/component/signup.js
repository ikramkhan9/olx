import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Signup extends Component {
    constructor(props){
        super(props);
        
        this.state = { useremail: '', password : ''}
        //this.state = { }

        this.submitForm = this.submitForm.bind(this);
        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);

    }    
    onchangeUsername(e){
        //console.log(e.target.value);
        this.setState({useremail: e.target.value});
        //console.log('useremail:', this.state.useremail)
    }
    onchangePassword(e){
        //console.log(e.target.value);
        this.setState({password: e.target.value});
        //console.log('password:', this.state.password)
    }    

    submitForm = (e) => {
        // e.preventDefaut();
        console.log('submitted form');
        axios.post('http://localhost:5000/signup', {
            txtemail: this.state.useremail,
            txtpwd: this.state.password
          })
          .then((response) => {
            console.log(response.data);
            this.props.history.push('/login');            
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render(){
        return(
            <div>
                <div className="col-md-4"></div>
                <div className="col-md-4 offset-md-4">
                    <div className="text-center">
                    <br/><br/>
                    <form className="form-signin" action={`javascript:void(0);`}>                    
                        <div className="alert alert-danger" role="alert">
                            Please signup for login.
                        </div>
                            
                            <h1 className="h3 mb-3 font-weight-normal">Please Signup!</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" name="txtemail" onChange={this.onchangeUsername} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" name="txtpwd" onChange={this.onchangePassword} id="inputPassword" className="form-control" placeholder="Password" required />
                            
                            <button className="btn btn-primary btn-block" onClick={this.submitForm} type="submit">Sign in</button>
                            <Link to="/login">User Login</Link> 
                        </form>

                    </div> 
                </div>
            </div>
        );
    }
}

export default Signup;