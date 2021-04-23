import { csrfFetch } from './csrf';

const ANNOTATION_CRU = 'line/CRU';
const LOAD = 'line/LIST';
const ONE = 'line/ONE'
const ANNOTATION_D ='line/DELETEANNOTATION'
const COMMENT_CRU = 'line/COMMENTCRU';
const COMMENT_D = 'line/COMMENTDELETE'


const getList = list => ({
    type: LOAD,
    list
})

const annotateTrack = (annotation) => {
    console.log(annotation)
    return {
      type: ANNOTATION_CRU,
      annotation: annotation,
    };
  };

const getOne = line => ({
    type: ONE,
    line
})
const deleteAnnotation = (lineId, annotationId) => {
    return {
        type: ANNOTATION_D,
        payload:lineId,
        annotationId
    }
}

const initialState = {
    list: [],
    types: []
};

export const getLines = (trackId) => async dispatch => {
    const response = await fetch(`/api/lines/tracks/${trackId}`);
    if(response.ok) {
        const list = await response.json();
        dispatch(getList(list));
    }
};

export const getOneLine = id => async dispatch => {
    const response = await fetch(`/api/lines/${id}`);

    if (response.ok) {
        const line = await response.json();
        dispatch(getOne(line));
    }
};
export const removeAnnotation = (annotationId, lineId) => async dispatch => {
    console.log(annotationId)
    const response = await csrfFetch(`/api/annotations/${annotationId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        dispatch(deleteAnnotation(lineId, annotationId))
    }

}
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
export const updateAnnotation = (data) => async dispatch => {
    const response = await csrfFetch(`/api/annotations/${data.annotationId}`, {
        method: 'put',
        body: JSON.stringify({body : data.body})
    });
    console.log(response)
    if (response.ok) {
        const annotation = await response.json();
        console.log(annotation)
        dispatch(annotateTrack(annotation));
    }
}
const lineReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD: {
            const allLines = {};
            action.list.forEach(line => {
                allLines[line.id] = line;
            });
            return {
                ...allLines
                
            }
        }
        case ANNOTATION_CRU:{
            const newState = {
                ...state
            }
            console.log(action.annotation)
            const target = action.annotation.annotation.lineId;
            newState[target].Annotation = action.annotation.annotation;
            return newState;
        }
        case ONE: {
            return {
                ...state,
                [action.line.id]: {
                    ...state[action.line.id],
                    ...action.line
                }
            }
        }
        case ANNOTATION_D : {
            const newState = {
                ...state
            }
            console.log(newState)
            console.log(action)
            delete newState[action.payload].Annotation
            return newState;
        } 

        default:
            return state;
    }
};

export default lineReducer;