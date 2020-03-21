import React from 'react';
import '../style/style.css'

class Header extends React.Component{
    render(){
        return(
            <div className="header">
              <div className = "logo">
                <h1>
                    Rakuten
                </h1>
                <h5>SHOP BY <br/>Category</h5>
              </div>
              <input placeholder = "search" className="searchInput"/>
              <div className= "login_reg">
                  <div className = "log">
                    <p className= "fontMod">LOGIN </p>
                    <p>&nbsp;or</p>
                    <p className= "fontMod">&nbsp;REGISTER</p>
                  </div>        
                   <p>Club</p>
              </div>
  
            </div>
        )
    }
}
export default Header