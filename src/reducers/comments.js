import { SAVE_COMMENT } from '../actions/types'

export default function(state = [], action) {
	switch (action.type) {
		case SAVE_COMMENT:
			// below is equal to return state.concat([action.payload])
			return [...state, action.payload]
	}
	return state
}
