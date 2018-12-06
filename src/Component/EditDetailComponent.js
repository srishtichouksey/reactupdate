import React, { Component } from 'react';

export default class EditDetailComponent extends Component {

	constructor(){
		super();
        this.state = {
        	editUserData : [],
        	gender : [
        		male => false,
        		female => true
        	]

        }
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.handleChange = this.handleChange.bind(this); 
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleSubmit(event) {
		this.setState({editUserData:{
			id : this.props.data.id,
            f_name : this.firstname.value,
            l_name : this.lastname.value,
            address : this.address.value,
            city : this.city.value,
            pincode : this.pincode.value,
		}}, function(){
			this.props.updateuser(this.state.editUserData)
		});
		event.preventDefault();
	}

	handleCancel(event){
		this.setState({
			id : this.props.data.id,
			f_name : this.props.data.firstname,
			l_name : this.props.data.lastname,
            address : this.props.data.address,
            city : this.props.data.city,
            pincode : this.props.data.pincode
		});
		event.preventDefault();
	}

	render() {
		return(
			<div>
				<div>USER DETAIL FORM</div>
				<form>
					<fieldset>
						FirstName :
						<input type="text" id="f_name" 
							ref={(input) =>{this.firstname = input}} 
							defaultValue={this.props.data.firstname} 
							placeholder="Firstname" />
					</fieldset>
					<fieldset>
					    LastName : <input 
					    	type="text" 
					    	ref={(input) =>{this.lastname = input}}
					    	defaultValue={this.props.data.lastname}
					        placeholder="LastName" />
					</fieldset>
					<fieldset>
					    Gender : Male <input 
					    			type="radio" 
					    			value={this.state.gender.male}
					    			defaultChecked={this.props.data.gender === "male"} 
					    			name="radiobutton"/> 
					            Female <input type="radio" 
					            	feaultChecked={this.props.data.gender === "female"}  
					            	name="radiobutton" />
					</fieldset>
					<fieldset>
						Address : 
						<input type="textbox" 
						        ref={(input) =>{this.address = input}} 
						        defaultValue={this.props.data.address}  
						        placeholder="Address"/>
					</fieldset>
					<fieldset>
                        City : <input  type="text" 
                                   ref={(input) =>{this.city = input}} 
                                   defaultValue={this.props.data.city} 
                                   placeholder="City" />
					</fieldset>
					<fieldset>
						Pincode : <input type="text" 
						            ref={(input) => {this.pincode = input}} 
						            defaultValue={this.props.data.pincode} 
						            placeholder="Pincode"/>
					</fieldset>
					<fieldset>
					    <input type="submit"
					        value="UPDATE"
					        onClick={this.handleSubmit}
					    />
					     <input type="submit"
					        value="Cancel"
					        onClick={this.handleCancel}
					    />   
					</fieldset>
				</form>
			</div>
		);
	}

}