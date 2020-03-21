import React from 'react';
import '../style/style.css';
import {connect} from 'react-redux';
import images from '../Utils/images'

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.refNode = React.createRef();
    }

    handleForm = (e) => {
        e.preventDefault();
        const selectElement = this.refNode.current.value
        if(selectElement === "mintomax"){
            this.props.dispatch({
                type: 'SORTMIN'
            })
            this.props.dispatch({
                type: 'MINTOMAX'
            })
        }
        else{
            this.props.dispatch({
                type: 'SORTMAX'
            })
            this.props.dispatch({
                type: 'MAXTOMIN'
            })
        }
    }

    nextImages = () => {
        this.props.dispatch({
            type: 'NEXTMAGES'
        })
    }

    prevImages = () => {
        this.props.dispatch({
            type: 'PREVIMAGES'
        })
    }
    render(){
        const Urls = this.props.ProductReducer.arr;
        const prev = "<"
        return(
            <div className = "combine">
                <div className="filter">
                    <h1 className= "dealsPadd"> Exciting Technology Deals</h1>
                    <select id="filter" name="filterProduct" ref={this.refNode}>
                        <option value="mintomax"  >Low To High</option>
                        <option value="maxtomin"  >High To Low</option>
                    </select>
                    <button onClick = {this.handleForm}>Apply Filter</button>
                 </div>
                <div className="product_list">
                   <button className = "nextimage" onClick = {this.prevImages}>{prev}</button>
                    <div className="wrapimages">
                        {Urls.map((el)=>{
                            return (
                                <div className="eachImage">
                                    <img key={el.imgUrl} src={el.imgUrl} className="stretchimage"></img>
                                    <p className= "boldPara">{el.name}</p>
                                    <p className="productPrice">${el.price}</p>
                                </div>
                            )            
                        })}   
                    </div>
                    <button className = "nextimage" onClick = {this.nextImages}>></button>
                </div>
            </div>
    
        )
    }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(ProductList);