import React, { Component } from 'react';

export default class EditDetailComponent extends Component {

	constructor(){
		super();
        this.state = {
        	editUserData : []
        }
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		console.log(this.refs.pincode.value);
		this.setState({editUserData:{
			id : this.props.data.id,
            f_name : this.refs.f_name.value,
            l_name : this.refs.l_name.value,
            address : this.refs.address.value,
            city : this.refs.city.value,
            pincode : this.refs.pincode.value,
		}}, function(){
			this.props.updateuser(this.state.editUserData)
		});
		console.log(this.state.editUserData);
		event.preventDefault();
	}

	render() {
		return(
			<div>
				<form>
					<fieldset>
						FirstName : <input type="text" id="f_name" ref="f_name" defaultValue={this.props.data.firstname} placeholder="Firstname" />
					</fieldset>
					<fieldset>
					    LastName : <input type="text" ref="l_name" defaultValue={this.props.data.lastname} placeholder="LastName" />
					</fieldset>
					<fieldset>
						Address : <input type="textbox" ref="address" defaultValue={this.props.data.address}  placeholder="Address"/>
					</fieldset>
					<fieldset>
                        City : <input type="text" ref="city" defaultValue={this.props.data.city} placeholder="City" />
					</fieldset>
					<fieldset>
						Pincode : <input type="text" ref="pincode" defaultValue={this.props.data.pincode} placeholder="Pincode"/>
					</fieldset>
					<fieldset>
					     <input type="submit" value="UPDATE" onClick={this.handleSubmit}/>   
					 </fieldset>
				</form>
			</div>
		);
	}

}