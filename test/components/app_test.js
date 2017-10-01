import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

// use describe to group together similar tests
// use it to test a single attribute of a target
// create an instance of App
// use expect to make an assertion (have a reasonable belief that something is true) about a target

describe('App', () => {
	let component

	beforeEach(() => {
		component = renderComponent(App)
	})

	it('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist
	})

	it('shows a comment list', () => {
		expect(component.find('.comment-list')).to.exist
	})
})
