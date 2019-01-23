import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = { useremail: '', password : ''}
        //this.state = { }

        this.submitForm = this.submitForm.bind(this);
        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);

    }    
    onchangeUsername(e){        
        this.setState({useremail: e.target.value});
        
    }
    onchangePassword(e){        
        this.setState({password: e.target.value});        
    }

    componentDidMount(){
        /*
        axios.post('http://localhost:5000/category')
        .then((response) => {
            this.setState({categories: response.data})
            //console.log('state data', this.state.categories);
        })
        .catch((error) => {
            console.log(error);
        });
        */
    }

    submitForm = (e) => {
        // e.preventDefaut();
        console.log('submitted form');
        axios.post('http://localhost:5000/login', {
            txtemail: this.state.useremail,
            txtpwd: this.state.password
          })
          .then((response) => {
                response.data && response.data.status === true ? this.props.history.push('/') : null;
                console.log(response.data);
                if(response.data.status === false) {
                    alert('There is no user found with that email and password in existing database. Please enter the valid email or password.');
                } else {

                }                
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
                        
                    <form className="form-signin" action={`javascript:void(0);`}>
                            <br/><br/>
                            <div className="alert alert-primary" role="alert">
                                Please Login for favorite Items!
                            </div>

                            <h1 className="h3 mb-3 font-weight-normal">User Credential</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" name="txtemail" onChange={this.onchangeUsername} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" name="txtpwd" onChange={this.onchangePassword} id="inputPassword" className="form-control" placeholder="Password" required />
                            
                            <button className="btn btn-primary btn-block" onClick={this.submitForm} type="submit">Sign in</button>
                            <Link to="/signup">Create User</Link> 
                        </form>

                    </div> 
                </div>
            </div>
        );
    }
}

export default Login;