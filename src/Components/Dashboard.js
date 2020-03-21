import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import '../style/style.css';
import Header from '../Sub-Components/Header';
import FeaturedProduct from '../Sub-Components/FeaturedProduct';
import ProductList from '../Sub-Components/ProductList'

class Dashboard extends React.Component{

    render(){ 
       if(!this.props.loginreducer.loggedin){
           return <Redirect to="/" />
       }
        return(
            <div className = "parent">
                <Header />
                <FeaturedProduct />
                {/* <Filters /> */}
                <ProductList/ >
            </div>
        )
    }
}

const mapStatetoProps  = state => state;

export default connect(mapStatetoProps)(Dashboard)