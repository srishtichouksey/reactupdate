import React, { Component } from 'react';
import EditDetail from './EditDetailComponent';
import { baseurl } from '../shared/baseurl';

export default class Users extends Component{

	constructor(props){
		super(props);
		this.state = {
			editusersdata : [],
			passit : false
		}
		this.updateUserInfo = this.updateUserInfo.bind(this);
	}

	editusers(id){
		//console.log(id);
		let users = this.props.sendusers;
		let index = users.findIndex(x => x.id === id);
		console.log(index);
		this.setState({
			editusersdata : users[index],
			passit : true
		});
	}

	updateUserInfo(data){
		let endpoint = baseurl+'users?id='+data.id;
         fetch(endpoint, {
            method : 'PUT',
            body : JSON.stringify({
            	id : data.id,
            	firstname : data.f_name,
            	lastname : data.l_name,
            	city : data.city,
            	pincode : data.pincode,
            	address : data.address
            }),
            headers : {
            	"Content-Type" : "application/json"
            },
            credentials : "same-origin"
         })
         .then(response => {
         	if(response.ok) {
         		return response;
         	}
         });
	}

	render() {
		return(
			<div>
			{ this.state.passit == true ? <EditDetail data={this.state.editusersdata} updateuser={this.updateUserInfo} /> : null}

				<table>
				{
				this.props.sendusers.map((data) => {
        		    return (
        		    	<tbody  key={data.id}>
        		    	    <tr>
            			        <td>{data.firstname} </td>
            			        <td>{data.lastname}</td>
            			        <td><button onClick={()=> this.editusers(data.id)}>EDIT</button></td>
            			    </tr>
            			</tbody>
        			);
					})
				}
				</table>
			</div>
		);
		
	}

}