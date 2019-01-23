import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import DashboardTopNav from './dashboard.topnav';
//import DashboardSidebar from './dashboard.sidebar';

class DashboardSubCategory extends Component {
    constructor(props){
        super(props);

        //let mysubitem = '';

        this.state = {
            subcat : [],
            subitem : []
        }        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/subcategory/' + this.props.match.params.categoryid)
        .then((response) => {
            this.setState({subcat: response.data});
            this.mysubitem = this.state.subcat.subCategory;
            console.log('mysubitem:', this.mysubitem);
            console.log('state sub: ', this.state.subcat); 
            
            this.setState({subitem: this.state.subcat.subCategory});
            console.log('item', this.state.subitem);
        })
        .catch((err) => {
            console.log('Error accourd from componentdidmount: ', err);
        })
    }

    render(){
        //let { subitem } = this.state;

        return(
            <div>
                <DashboardTopNav />   

                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                    <p>
                        <Link to={`/dashboard/addsubcategory/${this.props.match.params.categoryid}/${this.props.match.params.catname}`} className="btn btn-primary btn-sm">Add SubCategory</Link> &nbsp;
                        <Link className="btn btn-danger btn-sm" to='/dashboard'>Go to Back</Link>
                    </p>

                    <table className="table table-sm">
                        <thead>
                            <tr className="table-info">
                            <th scope="col">S #</th>
                            <th scope="col">Subcategory Name</th>
                            <th scope="col">Image Name</th>
                            <th scope="col">Price</th>
                            <th>IsPresent</th>
                            <th scope="col">Edit</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            
                            { this.mysubitem && this.mysubitem.map((mycategory, i) => {
                                return(
                                    <tr key ={i}>
                                            <th scope="row">{i = i + 1}</th>
                                            <td>{mycategory.sub_name}</td>
                                            <td>{mycategory.image}</td>
                                            <td>{mycategory.price}</td>
                                            <td>{mycategory.ispresent === true ? 'Yes' : 'No'}</td>
                                            <td><Link to={`/dashboard/edit_subcategoryid/${mycategory._id}`}><i className="fas fa-pen"></i></Link></td>
                                            
                                    </tr>                                                                       
                                )                              
                            }) }
                            
                                                        
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
export default DashboardSubCategory;

