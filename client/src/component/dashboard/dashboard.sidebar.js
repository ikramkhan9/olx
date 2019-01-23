import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardSidebar extends Component {
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add New Category</h5>                    
                        <p className="card-text">You can insert or add new category for display in sidebar of user main page.</p>
                        <Link to="/dashboard/addcategory" className="card-link">New Category</Link>                    
                    </div>
                </div>
                
                <br/>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Edit Category</h5>                    
                        <p className="card-text">You can update an existing category using below link.</p>
                        <Link to="/dashboard/addcategory" className="card-link">Edit Category</Link>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardSidebar;

