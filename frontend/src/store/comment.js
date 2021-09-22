import { csrfFetch } from './csrf';

const COMMENT_CRU = 'comment/CRU';
const COMMENT_D = 'comment/DELETE'
const LOAD = 'comment/LIST';
const ONE = 'comment/ONE';
const NEW_PAGE = 'comment/newPage'

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

const newPage = () =>{
    return {
        type: NEW_PAGE
    }
}
const initialState = {list:[]};

export const getComments = (id) => async dispatch => {
    dispatch(newPage)
    const response = await fetch(`/api/comments/tracks/${id}`);
    if(response.ok) {
        const list = await response.json();

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

    const response = await csrfFetch(`/api/comments/${data.commentId}`, {
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

export const resetComment = () => async dispatch => {
    dispatch(newPage)
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CRU: {
            const list = state.list
            list.push(action.comment.comment)
            return {
                ...state,
                [action.comment.comment.id] : action.comment.comment
            }
        }
        case COMMENT_D: {
            const newState = {...state};
            const commentNum = action.commentId;
            const list =  state.list;
            const newList = list.filter(comment => comment['id'] !== action.commentId)
            delete newState[commentNum];
            return {
                ...newState,
                list: newList
            }
        }
        case LOAD: {
            const allComments = {};
            const list = action.list
            action.list.forEach(comment => {
                allComments[comment.id] = comment;
            });
            return {
                ...allComments,
                list: list
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
        case NEW_PAGE: {
            return {
                list:[]
            };
        }
        default:
            return state;
    }
};

export default commentReducer;