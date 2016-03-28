import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				onClick={() => this.props.selectBook(book)}
				className ="list-group-item"> 
				{book.title}
				</li>
			)
		})
	}

	render() {
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	//whatever is returned from this will show
	//up as props inside of Booklist
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {//takes all the actions and throws them into the various reducers inside the app
	//whenever select book is called, the result should be
	//passed to all reducers
	return bindActionCreators({ selectBook }, dispatch)
	//anything returned from this function will end up
	//as props on the BookList container
}

//whenever making a container we want to export the container not the plain component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

















