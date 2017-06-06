import React, {Component}from 'react';
import ReactDOM from 'react-dom';

export default class Keypad extends Component{

	// constructor(props){
	// 	super(props)
	// 	this.state{
	// 		input: ""
	// 	}
	// }
	input = () => { 
		console.log('Entering password...')
	}

	render(){
		return(
			<div className="input-field">
			<input type='password' onKeyUp={this.input}/>
			</div>
			)
	}
}