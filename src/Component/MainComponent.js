import React, { Component } from 'react';
import ProductDetail from './ProductDetailComponent';
import AboutUs from './AboutUsComponent';
import AddProduct from './AddProductComponent';
import Users from './UserComponent';
import Header from './HeaderComponent';
import EditDetail from './EditDetailComponent';
import {Route , Switch, Redirect} from 'react-router-dom';
import { baseurl } from '../shared/baseurl';


export default class Main extends Component {

	constructor() {
		super();
		this.state = {
			details : [],
			showusers : []
		}
		this.addUser = this.addUser.bind(this);
	}

	componentDidMount() {
		fetch(baseurl+'users')
		.then((response) =>{
			return response.json();
		})
		.then((data) =>{
             //arrayusers.push(data);
              this.setState({
             showusers : data
        });
		});
	}

	addUser(product) {
		//console.log(JSON.stringify(product));
		 fetch(baseurl+'Products',{
		 	method: "POST",
		 	body: JSON.stringify(product),
		 	headers: {
		 		"Content-Type" : "application/json"
		 	},
		 	credentials: "same-origin"
		 })
		 .then(response => response.json());
	}

	// fetchUsers() {
 //        let arrayusers = [];
	// 	fetch(baseurl+'users')
	// 	.then((response) =>{
	// 		return response.json();
	// 	})
	// 	.then((data) =>{
 //             arrayusers.push(data);
	// 	});
        
 //        this.setState({
 //             showusers : arrayusers
 //        });
	// }
	render() {
		return (
			<div>
			    <Header />
				<Switch>
				    <Route path="/productdetail" component={() => <ProductDetail categories={this.state.details} />} />
				    <Route path="/addProduct" component = {() => <AddProduct addusers={this.addUser}/>} />
				    <Route path="/aboutus" component={AboutUs} />
				    <Route exact path="/users" component={() =>  <Users sendusers={this.state.showusers} />} />
					
				 </Switch>
			</div>
		);
	}
}