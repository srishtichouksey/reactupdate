import React, { Component } from 'react';
import ProductDetail from './ProductDetailComponent';
import AboutUs from './AboutUsComponent';
import AddProduct from './AddProductComponent';
import {Route , Switch, NavLink} from 'react-router-dom';
import { baseurl } from '../shared/baseurl';


export default class Main extends Component {

	constructor() {
		super();
		this.state = {
			details : []
		}
	}

	componentDidMount() {
		 fetch(baseurl + 'Category')
		.then((response) => {
			 return response.json();
			// console.log('response:', response);
			
		})
		.then((data) => {
			this.setState({
				details: data
			});
		});		
	}


	render() {
		return (
			<div>
				
				<NavLink to="/productdetail">
					<span>ProductDetail</span>
				</NavLink>
				<NavLink to="/aboutus">
					<span>ContactUs</span>
				</NavLink>
				<NavLink to="/addProduct">
					<span>AddProduct</span>
				</NavLink>
				<Switch>
				    <Route path="/productdetail" component={() => <ProductDetail categories={this.state.details} />} />
				    <Route path="/addProduct" component = {AddProduct} />
				    <Route path="/aboutus" component={AboutUs} />
				 </Switch>
			</div>
		);
	}
}