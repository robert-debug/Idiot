import Cookies from 'js-cookie';

const ANNOTATION_CRU = 'annotation/CRU';
const ANNOTATION_D = 'annotation/DELETE'

const annotateTrack = (annotation) => {
    return {
      type: ANNOTATION_CRU,
      payload: annotation,
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
    const response = await fetch('/tracks/:trackId(\\d+)/lines/:lineId(\\d+)', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
            "XSRF-TOKEN": Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const annotation = await response.json();
        dispatch(annotateTrack(annotation));
    }
}
export const updateAnnotation = data => async dispatch => {
    const response = await fetch(`/tracks/:trackId(\\d+)/lines/:lineId(\\d+)/annotations/:${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type' : 'application/json',
            "XSRF-TOKEN": Cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const annotation = await response.json();
        dispatch(annotateTrack(annotation));
    }
}

export const deleteAnnotation = annotationId => async dispatch => {
    const response = await fetch(`/tracks/:trackId(\\d+)/lines/:lineId(\\d+)/annotations/:${annotationId}`, {
        method: 'delete'
    })
    if (response.ok) {
        const annotation = await response.json();
        dispatch(deleteAnnotation(annotationId))
    }

}

const annotationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ANNOTATION_CRU: {
            return {
                ...state,
                [action.annotation.id] : annotation
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