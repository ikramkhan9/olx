import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardTopNav extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/"><i className="fas fa-bell"></i> OLX Dashboard</Link>                    
                </nav>
                <br /> 
                <div className="container">   
                    <div className="alert alert-secondary" role="alert">
                        The OLX Dashboard for CRUD Application using MERN Stack!
                    </div>                
                </div>
            </div>
        )
    }
}

export default DashboardTopNav;

