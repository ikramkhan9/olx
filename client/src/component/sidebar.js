import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

//import ReactDOM from 'react-dom';

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories : []
        };        

        this.onclickCategory = this.onclickCategory.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/category')
        .then((response) => {
            this.setState({categories: response.data});
            //console.log('sidebar', this.state.categories);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    onclickCategory(e){
        
        console.log('click event:')

        e.preventDefault();
        //console.log('click event:', this.props.match.params.categoryid);

        /*
        axios.get('http://localhost:5000/subcategory')
        .then((response) => {
            this.setState({categories: response.data});
            console.log('sidebar', this.state.categories);
        })
        .catch((err) => {
            console.log(err);
        });
        */
    }

    render(){
        return(
            <div className="list-group">                
                <a href="/" className="list-group-item list-group-item-action active">
                    All Categories
                </a>
                {this.state.categories.map((category, i) => {
                    return <Link to={`/subcategory/${category._id}`} onClick={() => this.onclickCategory(category._id)} className="list-group-item list-group-item-action" key={i}> <i className={category.icon}></i> {category.catname} <span className="badge badge-primary badge-pill">{category.subCategory.length}</span></Link>
                })}                
            </div>
        )
    }
}

export default Sidebar;