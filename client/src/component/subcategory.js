import React, { Component } from 'react';
import TopNav from './topnav';
import TopAlert from './topalert';
import Sidebar from './sidebar';
import Content2 from './content2';

//import axios from 'axios';

class Subcategory extends Component {
    constructor(props){
        super(props);

        this.state = {
            sub_category : []
        };

        //let cat_id = '';
    }
  

    componentDidMount(){
        this.cat_id = this.props.match.params.categoryid;
        console.log('sub category page', this.cat_id);
    }

    render(){
        return(
            <div>
                <TopNav />
                <br />

                <div className="container">
                <TopAlert />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"><Sidebar {...this.props}/></div>
                        <div className="col-md-9"><Content2  {...this.props}/></div>
                    </div>          
                </div>                
            </div>
            
        )
    }
}

export default Subcategory;
