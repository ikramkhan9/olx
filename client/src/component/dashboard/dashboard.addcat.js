import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//var BrowserHistory = require('react-router/lib/BrowserHistory').default;


import DashboardTopNav from './dashboard.topnav';
import axios from 'axios';
//import DashboardSidebar from './dashboard.sidebar';

class DashboardAddCatgegory extends Component {
    constructor(props){
        super(props);

        this.submitCategory = this.submitCategory.bind(this);
        this.onchangeCategory = this.onchangeCategory.bind(this);
        this.onchangeIcon = this.onchangeIcon.bind(this);
        this.onchangePresent = this.onchangePresent.bind(this);

        this.state = {txtcategory : ''};
        this.state = {txticon : ''};
        this.state = {txtpresent : ''}


    }

    onchangeCategory(e){
        this.setState({txtcategory : e.target.value});
        //console.log('category ', e.target.value);

    }
    onchangeIcon(e){
        //console.log('icon ', e.target.value);
        this.setState({txticon: e.target.value});

    }
    onchangePresent(e){
        //if(e.target.value == '' || null) {
          //  e.target.value = true;
        //}
        //console.log('present ', e.target.value);
        this.setState({txtpresent: e.target.value})
    }

    gotoBack(){
        this.props.history.push("/dashboard");
    }

    submitCategory(e){

        console.log(this.state.txtcategory, this.state.txticon, this.state.txtpresent);
        console.log('Submit button click');
        //console.log(this.refs.value.cmbPresent);

        e.preventDefault();

        axios.post('http://localhost:5000/addcategory', {
            txtcategory: this.state.txtcategory,
            txticon: this.state.txticon,
            txtpresent: this.state.txtpresent
          })
          .then(function (response) {
            console.log(response.data);
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return(
            <div>
                <DashboardTopNav />   

                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-md-offset-2"></div>
                        
                        <div className="col-md-8"> 
                            <div>
                                <h3 className="text-primary">Add New Category</h3> <hr/>
                                <form method="post">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Category Name</label>
                                            <input name="txt_category" onChange={this.onchangeCategory} type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Enter a valid category name" />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Font Awesome Icon</label>
                                            <input name="txt_icon" onChange={this.onchangeIcon} type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Enter icon class name" />
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">                                        
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputState">Present</label>
                                            <select name="txt_present" id="inputState" onChange={this.onchangePresent} className="form-control form-control-sm">
                                                <option value="Please Select">Please Select</option>
                                                <option value="true">Yes</option>
                                                <option value="false">No</option>
                                            </select>
                                        </div>                                        
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.submitCategory}>Insert Data <i className="fas fa-database"></i> </button> &nbsp;
                                    <Link to="/dashboard" className="btn btn-danger btn-sm">Go Back <i className="fas fa-angle-left"></i></Link>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default DashboardAddCatgegory;

