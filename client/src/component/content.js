import React, { Component } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';

//import path from 'path';

//import ReactDOM from 'react-dom';

class Content extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            categories : [],
        }
    }    

    componentDidMount(){
        axios.get('http://localhost:5000/category')
        .then((response) => {
            this.setState({categories: response.data});            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    favoritItem(itemid, item_name, item_price){
        console.log('item id: ', itemid);

        axios.post('http://localhost:5000/favoriteitem', {
            itemid: itemid,
            item_name: item_name,
            item_price: item_price
          })
          .then((response) => {
            console.log('fav_item', response.data);
          })
          .catch((error) => {
            console.log('Error occured from favorite item post: ', error);
          });
    }

    render(){
        return(
            <div>
                <span className="d-block p-2 bg-dark text-white">All Sub Category</span> <br />
            <div className="row">
                
                    {this.state.categories.map((category, id) => {
                        return(                            
                            <div className="col-md-12" key={id}>
                            
                                {                                    
                                    category.subCategory.map((subcat, i) => {                                       
                                                         
                                    return(                                       
                                        <div key={i}>
                                            <div className="row">
                                                <div className="col-md-3"><img height="180px" width="180px" src={'http://localhost:5000/upload_image/'+subcat.image} alt={subcat.image} /></div>
                                                <div className="col-md-9">
                                                    <h5 className="text-primary">{subcat.sub_name}</h5>
                                                    <p className="text-secondary">{subcat.description}</p>
                                                    <p className="text-success float-right"><small>Posted: {dateFormat(subcat.createdAt,'yyyy-mm-dd')}</small></p>
                                                    <br/><br/>
                                                    <h5 className="float-left"><span className="badge badge-danger">Price: {subcat.price}</span></h5>
                                                    <button type="button" onClick={() => this.favoritItem(subcat._id, subcat.sub_name, subcat.price)} className="float-right btn btn-primary btn-sm">Favorite Item</button>
                                                    
                                                    
                                                    
                                                </div>
                                            </div>

                                          
                                        <hr />  
                                        </div>  
                                                                    
                                        )
                                    })
                                }
                            </div>                            
                        )                                          
                    })} 
                    
            </div> {/* Close Row */}

            </div> 
        );
    }
}

export default Content;