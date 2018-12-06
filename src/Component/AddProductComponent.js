import React , { Component } from 'react';

export default class AddProduct extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ProductInfo:[]
		};
		this.addDetail = this.addDetail.bind(this);
		
	}

	addDetail(event) {
		console.log(this.props);
		if(this.refs.p_name.value === '') {
			alert('Product Name is required');
		} else {
			this.setState({
				ProductInfo:{
				p_name :this.refs.p_name.value,
				p_details : this.refs.p_details.value,
				p_type : this.refs.p_type.value,
				p_price : this.refs.p_price.value

			}},function(){
				this.props.addusers(this.state.ProductInfo);
				console.log(this.props);
			});
		}
		event.preventDefault();
	}


	render() {
		return(
			<form id="product" onSubmit= {this.addDetail}>
				<h3>Add Product Form</h3>
				<fieldset>
					Product Name : <input placeholder="Product Name" ref="p_name" type="text" />
				</fieldset>
				<fieldset>
					Product Details : <input placeholder="Product Details" ref="p_details" type="textbox" />
				</fieldset>
				<fieldset>
					Product Type : <input placeholder="Product Type" ref="p_type" type="text" />
				</fieldset>
				<fieldset>
					Product Price : <input placeholder="Product price" ref="p_price" type="text" />
				</fieldset>
				<fieldset>
					<input type="submit" />
				</fieldset>
			</form>
		);
	}
}