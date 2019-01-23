import React, { Component } from 'react';
import {Link} from 'react-router-dom';


//import ReactDOM from 'react-dom';

class TopNav extends Component {
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href=""><i className="fas fa-bell"></i> OLX </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <i className="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard <i className="fas fa-bolt"></i></Link>                        
                    </li>                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"> Login <i className="fas fa-mobile"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup <i className="fas fa-car"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorite">Favorit Item <i className="fas fa-car"></i></Link>
                    </li>
                    
                    </ul>
                </div>
            </nav>          

            </div>
        )
    }
}

export default TopNav;
