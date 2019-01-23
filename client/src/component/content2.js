import React, { Component } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';

//import ReactDOM from 'react-dom';

class Content2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories : [],
            subcat: [],
        }
        //let myObject;
    }    

    componentDidMount(){
        //console.log('url', this.props);
        axios.get('http://localhost:5000/subcategory/' + this.props.match.params.categoryid)
        .then((response) => {
            //this.setState({categories: this.state.categories.concat(response.data)});
            this.myObject = response.data;
            //console.log('old:', typeof this.myObject);

                         
             //console.log('obj:', this.myObject);


            //let newData = oldData.map((mydata, i) => {
              //  return mydata;
            //});
            //console.log('typeof: ', typeof mydata);

            this.setState({categories: response.data});            
            console.log('state data', this.state.categories);

            this.setState({subcat: this.state.categories.subCategory});
            console.log('sub', this.state.subcat);
        })
        .catch((error) => {
            console.log('Error from content2: ', error);
        });
    }

    render(){
        const { categories } = this.state;
        const { subcat } = this.state;

        //console.log('length: ', this.state.categories);

        

        return(
            <div>
                <div className="row">
                    <h3 className="text-danger">Category: { categories.catname }</h3>
                    <hr /><br/>
                    { subcat.map((cat, i) => {
                        return(
                            <div key={i}>
                            <div className="row">
                                <div className="col-md-3"><img height="180px" width="180px" src={'http://localhost:5000/upload_image/' + cat.image} alt={cat.image} /></div>
                                    <div className="col-md-9">                                    
                                        <h5 className="text-primary">{cat.sub_name}</h5>
                                            <p className="text-secondary">{cat.description}</p>
                                            <p className="float-left"><span className="badge badge-danger">Price: {cat.price}</span></p>                                                            
                                            <p className="text-success float-right"><small>Posted: {dateFormat(cat.createdAt,'yyyy-mm-dd')}</small></p>
                                    </div>
                            </div>
                            <hr />
                            </div>
                        )
                    }) }

                    
                </div>                                   
                                        
            </div>
                
                
                
        );
    }
}

export default Content2;