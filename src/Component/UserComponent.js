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
		let users = this.props.sendusers;
		let index = users.findIndex(x => x.id === id);
		console.log(index);
		this.setState({
			editusersdata : users[index],
			passit : true
		});
	}

	updateUserInfo(data){
		let endpoint =  'http://localhost:3000/users/'+data.id;
        fetch(endpoint, {
            method : "PUT",
            headers : {
            	"Content-Type" : "application/json"
            },
            body : JSON.stringify({
            	id : data.id,
            	firstname : data.f_name,
            	lastname : data.l_name,
            	gender : data.gender,
            	city : data.city,
            	pincode : data.pincode,
            	address : data.address
            }),
            credentials : "same-origin"
         })
         .then(response => {
         	if(response.ok) {
         		return response;
         	} else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
         })
         .then(response	=> response.json())
         .catch(error => {console.log('data is not updated successfully')
     	});
	}

	render() {
		return(
			<div>
			{ this.state.passit == true && <EditDetail data={this.state.editusersdata} updateuser={this.updateUserInfo} />}
				<table id="user_table">
				
				{ this.state.passit == false &&
				this.props.sendusers.map((data) => {
        		    return (
        		    	<tbody  key={data.id}>
        		    	    <tr>
            			        <td>{data.firstname}</td>
            			        <td>{data.lastname}</td>
            			        <td><button className="editbutton" onClick={()=> this.editusers(data.id)}>EDIT</button></td>
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