import Cookies from 'js-cookie';
import { csrfFetch } from './csrf';

const ANNOTATION_CRU = 'annotation/CRU';
const ANNOTATION_D = 'annotation/DELETE'

const annotateTrack = (annotation) => {
    return {
      type: ANNOTATION_CRU,
      annotation: annotation,
    };
  };
const deleteAnnotation = (annotationId) => {
    return {
        type: ANNOTATION_D,
        annotationId
    }
}
const initialState = {
    list: [],
    types: []
};

export const createAnnotation = data => async dispatch => {
    console.log(data)
    const response = await csrfFetch(`/api/annotations`, {
        method: 'post',
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const annotation = await response.json();
        dispatch(annotateTrack(annotation));
    }
}
export const updateAnnotation = data => async dispatch => {
    
    const response = await csrfFetch(`/api/annotations/${data.id}`, {
        method: 'put',
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const annotation = await response.json();
        dispatch(annotateTrack(annotation));
    }
}

export const removeAnnotation = annotationId => async dispatch => {
    console.log(annotationId)
    const response = await csrfFetch(`/api/annotations/${annotationId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        dispatch(deleteAnnotation(annotationId))
    }

}

const annotationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ANNOTATION_CRU: {
            return {
                ...state,
                [action.annotation.id] : action.annotation
            }
        }
        case ANNOTATION_D: {
            const newState = {...state};
            delete newState[action.annotation.annotationId];
            return newState;
        }
        default:
            return state;
    }
};

export default annotationReducer;