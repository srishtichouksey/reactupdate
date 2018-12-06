import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

	render() {
		return(
          <div id="main_div">
          	<div id="header">
          	    <span>Ecommerce !!!</span>
                   <Link to="/users"><span className="link">UserDetails</span>
                   </Link>
                   <Link to="/addProduct"><span className="link">AddProduct</span>
                   </Link>
                   <Link to="/productdetail"><span className="link">ProductDetail</span>
                  
                   </Link>
               </div>
          </div>
		);
	}
}

