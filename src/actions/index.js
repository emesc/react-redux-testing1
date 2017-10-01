import { SAVE_COMMENT } from './types'

// always call saveComment with the comment we want to save
export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment,
	}
}
