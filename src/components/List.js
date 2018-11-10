import React, {Component} from 'react';

const Item = ({value, onClick}) => {
	return <li onClick={onClick}>{value}</li>
}

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			list: ['one', 'twoo', 'threee']
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let list = this.state.list;
		list[this.state.list.length] = this.state.value;
		this.setState({list, value:''})
		console.log(this.state.list)
	}
	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	deleteItem = (i) => {
		let list = this.state.list;
		list.splice(i, 1);
		this.setState({list});
	}

	render () {
		const todos = 
		this.state.list.map((todo, i)=> (
			<Item value={todo} key={i} onClick={()=> this.deleteItem(i)}/>
		))

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						value={this.state.value}
						onChange={this.handleChange}/>
					<button type='submit'>ADD</button>
				</form>
				<ul>
					{todos}
				</ul>
			</div>
		)
	}
}

export default List;