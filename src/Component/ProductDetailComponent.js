import React, { Component } from 'react';
import { baseurl } from '../shared/baseurl';


export default class ProductDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count : 1
		}
	}

	render() {
		return(
			<div>
				{
				this.props.categories.map((data) => {
        		    return (
        		    	<div  key={data.id}>
            			    <h3 >{data.Type} </h3>
            			    <img  src= {baseurl+data.image} alt="women" />
            			</div>
        			);
					})
				}
			</div>
		
		);
	};
}