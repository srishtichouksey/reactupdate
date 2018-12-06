import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

	render() {
		return(
          <div id="main_div">
          	<div id="header">
          	    <span>Ecommerce !!!</span>
             	</div>
               <Link to="/users"><span Class="link">UserDetails</span>
               </Link>
               <Link to="/addProduct"><span Class="link">AddProduct</span>
               </Link>
               <Link to="/productdetail"><span Class="link">ProductDetail</span>
               </Link>
          </div>
		);
	}
}

