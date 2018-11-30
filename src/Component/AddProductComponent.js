import React , { Component } from 'react';

export default class AddProduct extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ProductInfo:[]
		}
		this.addDetail = this.addDetail.bind(this);
		
	}


	render() {
		return(
			<form id="product" onSubmit= {this.addDetail}>
				<h3>Add Product Form</h3>
				<fieldset>
					Product Name : <input placeholder="Product Name" type="text" />
				</fieldset>
				<fieldset>
					Product Details : <input placeholder="Product Details" type="textbox" />
				</fieldset>
				<fieldset>
					Product Type : <input placeholder="Product Type" type="text" />
				</fieldset>
				<fieldset>
					Product Price : <input placeholder="Product price" type="price" />
				</fieldset>
				<fieldset>
					<input type="submit" />
				</fieldset>
			</form>
		);
	}
}