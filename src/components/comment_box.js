import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comment: '',
		}
	}

	handleChange(event) {
		// we want the event argument to be reflected inside the component's local state which we'll do inside the constructor
		this.setState({ comment: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.saveComment(this.state.comment)
		this.setState({ comment: '' })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
				<h4>Add a comment</h4>
				<textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
				<div>
					<button action="submit">Comment</button>
				</div>
			</form>
		)
	}
}

// we only care about wiring up the action component, we don't care about the state at all so first argument which is usually mapStateToProps is set to null
export default connect(null, actions)(CommentBox)
