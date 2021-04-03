import Cookies from 'js-cookie';
import { csrfFetch } from './csrf';

const COMMENT_CRU = 'comment/CRU';
const COMMENT_D = 'comment/DELETE'
const LOAD = 'comment/LIST';
const ONE = 'comment/ONE';

const getList = list => ({
    type: LOAD,
    list
})

const getOne = comment => ({
    type: ONE,
    comment
})
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
const initialState = {};

export const getComments = (id) => async dispatch => {
    const response = await fetch(`/api/comments/annotations/${id}`);
    if(response.ok) {
        const list = await response.json();
        console.log(list)
        dispatch(getList(list));
    }
};

export const getOneComment = id => async dispatch => {
    const response = await fetch(`/api/comments/${id}`);

    if (response.ok) {
        const comment = await response.json();
        dispatch(getOne(comment));
    }
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
            console.log(action.comment.comment)
            return {
                ...state,
                [action.comment.comment.id] : action.comment.comment
            }
        }
        case COMMENT_D: {
            const newState = {...state};
            delete newState[action.comment.commentId];
            return newState;
        }
        case LOAD: {
            const allComments = {};
            action.list.forEach(comment => {
                allComments[comment.id] = comment;
            });
            return {
                ...allComments,
                ...state,
                list: action.list
            }
        }
        case ONE: {
            return {
                ...state,
                [action.comment.id]: {
                    ...state[action.comment.id],
                    ...action.comment
                }
            }
        }
        default:
            return state;
    }
};

export default commentReducer;