import { csrfFetch } from './csrf';

const ANNOTATION_CRU = 'annotation/CRU';
const ANNOTATION_D = 'annotation/DELETE';
const LOAD = 'annotation/LIST';
const ONE = 'annotation/ONE'

const getList = list => ({
    type: LOAD,
    list
})

const getOne = annotation => ({
    type: ONE,
    annotation
})

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
const initialState = {};

export const getAnnotations = (id) => async dispatch => {
    const response = await fetch(`/api/annotations/line/${id}`);
    if(response.ok) {
        const list = await response.json();
        console.log(list)
        dispatch(getList(list));
    }
};

export const getOneAnnotation = id => async dispatch => {
    const response = await fetch(`/api/annotations/${id}`);

    if (response.ok) {
        const annotation = await response.json();
        dispatch(getOne(annotation));
    }
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
    console.log(data)
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
                [action.annotation.annotation.id] : action.annotation.annotation
            }
        }
        case ANNOTATION_D: {
            const newState = {...state};
            delete newState[action.annotation.annotationId];
            return newState;
        }
        case LOAD: {
            const allAnnotations = {};
            action.list.forEach(annotation => {
                allAnnotations['annotation'] = annotation;
            });
            return {
                ...allAnnotations,
                ...state,
                list: action.list
            }
        }
        case ONE: {
            return {
                ...state,
                [action.annotation.id]: {
                    ...state[action.annotation.id],
                    ...action.annotation
                }
            }
        }
        default:
            return state;
    }
};

export default annotationReducer;