import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//var BrowserHistory = require('react-router/lib/BrowserHistory').default;


import DashboardTopNav from './dashboard.topnav';
import axios from 'axios';
//import DashboardSidebar from './dashboard.sidebar';

class DashboardAddSubCatgegory extends Component {
    constructor(props){
        super(props);

        this.submitCategory = this.submitCategory.bind(this);
        this.onchangeCategory = this.onchangeCategory.bind(this);
        this.onchangeImage = this.onchangeImage.bind(this);
        this.onchangePresent = this.onchangePresent.bind(this);
        this.onchangeDescription = this.onchangeDescription.bind(this);
        this.onchangePrice = this.onchangePrice.bind(this);

        this.state = {txtcategory : ''};
        this.state = {txtfilename : ''};
        this.state = {txtpresent : ''};
        this.state = {txtdescription: ''};
        this.state = {txtprice: ''};

        console.log('cat id: ', this.props.match.params.catid);
    }

    onchangeCategory(e){
        this.setState({txtcategory : e.target.value});
    }
    onchangeImage(e){

        console.log('before: ', e.target.files[0]);        
        this.setState({txtfilename: e.target.files[0]});
        console.log('after:', this.state.txtfilename)
    }
    onchangePresent(e){
        this.setState({txtpresent: e.target.value})
    }

    onchangeDescription(e){        
        this.setState({txtdescription: e.target.value});        
    }

    onchangePrice(e){        
        this.setState({txtprice: e.target.value});
        console.log('price', this.state.txtprice);
    }



    gotoBack(){
        this.props.history.push("/dashboard");
    }

    submitCategory(e){

        console.log(this.state.txtcategory, this.state.txtfilename, this.state.txtpresent);
        console.log('cat state', this.state.txtcategory);
        e.preventDefault();

        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("filename", imagefile.files[0]);
        formData.append("txt_subcategory", this.state.txtcategory);
        formData.append("txt_present", this.state.txtpresent);
        formData.append('txt_description', this.state.txtdescription);
        formData.append('txt_price', this.state.txtprice);


        const config = {     
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        
        axios.post('http://localhost:5000/addsubcategory/' + this.props.match.params.catid + "/" + this.props.match.params.catname, formData, config)
          .then((response) => {
              //console.log('this is cat id: ', this.props.match.params.catid);
              console.log('post data', response.data);            
          })
          .catch(function (error) {
            console.log('Error occured: ', error);
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
                                <h3 className="text-primary">Add SubCategory for <span className="text-danger"> {this.props.match.params.catname} </span> Category</h3> <hr/>
                                <form method="post" encType="multipart/form-data" onSubmit={this.submitCategory}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">SubCategory Name</label>
                                            <input name="txt_subcategory" onChange={this.onchangeCategory} type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Enter a valid category name" />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Select a valid image</label>
                                            <input name="filename" id="file" onChange={this.onchangeImage} type="file" accept="image/*" className="form-control-file form-control-sm" />
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
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Description</label>
                                            <input name="txt_description" onChange={this.onchangeDescription} type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Item Description" />
                                        </div>
                                        
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Price</label>
                                            <input name="txt_price" onChange={this.onchangePrice} type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Item Price" />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-sm">Insert Data <i className="fas fa-database"></i> </button> &nbsp;
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

export default DashboardAddSubCatgegory;

