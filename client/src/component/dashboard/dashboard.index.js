import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import DashboardTopNav from './dashboard.topnav';
//import DashboardSidebar from './dashboard.sidebar';

class DashboardMain extends Component {
    constructor(){
        super();

        this.state = {
            categories : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/category')
        .then((respose) => {
            this.setState({categories: respose.data});

            console.log('dashboard category ', this.state.categories);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        return(            
            <div>
                <DashboardTopNav />   

                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                    <p>
                        <Link to="/dashboard/addcategory" className="btn btn-primary btn-sm">Add New Category</Link>
                    </p>

                    <table className="table table-sm">
                        <thead>
                            <tr className="table-info">
                            <th scope="col">S #</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">SubCategory</th>
                            <th scope="col">Present</th>                            
                            <th scope="col">SubCategory</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.categories.map((category, i) => {
                                return(
                                    <tr key ={i}>
                                        <th scope="row">{i = i + 1}</th>
                                        <td>{category.catname}</td>
                                        <td>{category.subCategory.length}</td>
                                        <td>{category.ispresent === true ? 'Yes' : 'No'}</td>
                                        {/*<td><Link to={`/dashboard/editcategory/${category._id}`}><i className="fas fa-pen"></i></Link></td>*/}
                                        <td><Link to={`/dashboard/subcategory/${category._id}/${category.catname}`}><i className="fas fa-bars"></i></Link></td>
                                    </tr>
                                )                              
                            })}
                            
                                                        
                        </tbody>
                    </table>
                    </div>

                        {/*
                        <div className="col-md-4"> <DashboardSidebar/> </div>
                        <div className="col-md-8"> <h3>Welcome to OLX Dashboard</h3> </div>
                        */}
                        
                    </div>
                </div> 
            </div>
        )
    }
}
export default DashboardMain;

