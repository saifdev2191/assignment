import React from 'react';
import '../style/style.css';
import images from '../Utils/images';
import {connect} from 'react-redux';


class FeaturedProduct extends React.Component{

    renderNewimage = (e) => {
        let randomindex = Math.ceil(Math.random()*6);
        const url = images[randomindex]["imgUrl"];
        this.props.dispatch({
            type: 'RENDER_IMAGE',
            url
        })
        
    }
    render(){
        const x = "<"
        const y = ">"
        return(
            <div className="featured_product">
                <button className= "nextimage" onClick = {this.renderNewimage}>{x}</button>
                {/* <svg width="250" height="250" onClick = {this.renderNewimage} className= "cursor">
                        <circle cx="32" cy="180" r="30" fill="white" />
                        <text x="12%" y="72%" text-anchor="middle" fill="blue" font-size="40px"  dy=".3em">{x}</text>
                </svg> */}
                <div className = "sale_feature">
                    <div className= "salebanner">
                        <h1 className="textWhite">
                            End-of-<br></br>Winter-Sale
                        </h1>
                        <p className="textWhiteText">Lorem ipsum</p>
                    <button>
                            Sparen
                    </button>
                </div>
                <img src= {this.props.featureReducer} className="featuredimage"></img>
                <div className = "discountLogo">
                    <svg width="250" height="250" style = {{paddingTop:"20px"}}>
                        <circle cx="150" cy="150" r="70" fill="white" />
                        <text x="60%" y="40%" text-anchor="middle" fill="blue" font-size="15px"  dy=".3em">bis-zu</text>
                        <text x="60%" y="60%" text-anchor="middle" fill="blue" font-size="50px"  dy=".3em">30%</text>
                        <text x="60%" y="75%" text-anchor="middle" fill="blue" font-size="20px"  dy=".3em">Rabbat*</text>
                    </svg>
                </div>
                </div>
                <button className= "nextimage" onClick = {this.renderNewimage}>></button>
                {/* <svg width="250" height="250" onClick = {this.renderNewimage} className= "cursor">
                        <circle cx="195" cy="180" r="30" fill="white" />
                        <text x="87%" y="72%" text-anchor="middle" fill="blue" font-size="40px"  dy=".3em">{y}</text>
                </svg> */}
            </div>
        )
    }
}

const mapStatetoProps = (state) => state

export default connect(mapStatetoProps)(FeaturedProduct)