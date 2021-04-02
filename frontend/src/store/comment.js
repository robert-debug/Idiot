import Cookies from 'js-cookie';
import { csrfFetch } from './csrf';

const COMMENT_CRU = 'comment/CRU';
const COMMENT_D = 'comment/DELETE'

const commentAnnotation = (comment) => {
    return {
      type: COMMENT_CRU,
      comment: comment,
    };
  };
const deleteComment = (commentId) => {
    return {
        type: COMMENT_D,
        commentId
    }
}
const initialState = {
    list: [],
    types: []
};

export const createComment = data => async dispatch => {
    const response = await csrfFetch('/api/comments', {
        method: 'post',
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const comment = await response.json();
        dispatch(commentAnnotation(comment));
    }
}
export const updateComments = data => async dispatch => {
    const response = await csrfFetch(`/api/comments/${data.id}`, {
        method: 'put',
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const comment = await response.json();
        dispatch(commentAnnotation(comment));
    }
}

export const removeComment = commentId => async dispatch => {
    const response = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'delete',
    })
    if (response.ok) {
        dispatch(deleteComment(commentId))
    }

}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CRU: {
            console.log(action.comment)
            return {
                ...state,
                [action.comment.id] : action.comment
            }
        }
        case COMMENT_D: {
            const newState = {...state};
            delete newState[action.comment.commentId];
            return newState;
        }
        default:
            return state;
    }
};

export default commentReducer;