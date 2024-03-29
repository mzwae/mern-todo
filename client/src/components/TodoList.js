import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class TodoList extends Component {

/*	TodoList.propTypes = {
		getItems: PropTypes.func.isRequired,
		item: PropTypes.object.isRequired
	};
*/
	static propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

	componentDidMount(){
		this.props.getItems();
	}

	onDeleteClick = (id) => {
		this.props.deleteItem(id);
	}

	render(){
		const { items } = this.state.item;
		return(
			<Container>

				<ListGroup>
					<TransitionGroup className="todo-list">
						{items.map(({_id, name}) => (
								<CSSTransition key={_id} timeout={500} classNames="fade">
									<ListGroupItem>
									<Button
										className="remove-btn"
										color="danger"
										size="sm"
										onClick={this.onDeleteClick.bind(this, _id)}
									>
										&times;
									</Button>
										{name}
									</ListGroupItem>

								</CSSTransition>
								))}

					</TransitionGroup>
				</ListGroup>

			</Container>
			);
	}

}



const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(TodoList);
