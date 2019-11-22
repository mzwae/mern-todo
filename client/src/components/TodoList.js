import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
	state = {
		items: [
			{id: uuid(), name: 'Have breakfast'},
			{id: uuid(), name: 'Go to school'},
			{id: uuid(), name: 'Meet maths professor'},
			{id: uuid(), name: 'Do grocery'},
			{id: uuid(), name: 'Go to Yoga class'},
			{id: uuid(), name: 'Complete car insurance'}
		]
	}

	render(){
		const { items } = this.state;
		return(
			<Container>
				
				<Button
					color="dark"
					style={{marginBottom: '2rem'}}
					onClick={() => {
						this.setState(state => ({
							items: [...state.items, {id: uuid(), name}]
						}));
					}}

				>Add Item</Button>

			</Container>
			);
	}

}

export default ShoppingList;