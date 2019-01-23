import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import all client application routes

import App from './App';
import Subcategory from './component/subcategory';
import Login from './component/login';
import Signup from './component/signup';

import DashboardMain from './component/dashboard/dashboard.index';
import DashboardAddCatgegory from './component/dashboard/dashboard.addcat';
import DashboardSubCategory from './component/dashboard/dashboard.subcategory';
import DashboardEditCatgegory from './component/dashboard/dashboard.editcategory';
import DashboardAddSubCatgegory from './component/dashboard/dashboard.addsubcategory';


var CustomRoutes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path='/subcategory/:categoryid' component={Subcategory} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />

            <Route exact path="/dashboard" component={DashboardMain} />
            <Route path="/dashboard/subcategory/:categoryid/:catname" component={DashboardSubCategory} />            
            <Route path="/dashboard/addcategory" component ={DashboardAddCatgegory} />
            <Route path="/dashboard/editcategory/:categoryid" component={DashboardEditCatgegory} />
            {/*<Route path="/dashboard/subcategory/:categoryid/:catname" component={DashboardSubCategory} />*/}
            <Route path="/dashboard/addsubcategory/:catid/:catname" component={DashboardAddSubCatgegory} />

        </div>
    </Router>
);

export default CustomRoutes;