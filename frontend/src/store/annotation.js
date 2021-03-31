import Cookies from 'js-cookie';

const ANNOTATION_CRU = 'annotation/CRU';
const ANNOTATION_D = 'annotation/DELETE'

const annotateTrack = (annotation) => {
    return {
      type: ANNOTATION_CRU,
      payload: annotation,
    };
  };
const deleteTrack = () => {
    return {
        type: ANNOTATION_D
    }
}
const initialState = {
    list: [],
    types: []
};

export const createAnnotation = data => async dispatch => {
    const response = await fetch('', {
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

const annotationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ANNOTATION_CRU: {
            // const allTracks = {};
            // action.list.forEach(track => {
            //     allTracks[track.id] = track;
            // });
            return {
                // ...allTracks,
                // ...state,
                // list: action.list
            }
        }
        default:
            return state;
    }
};

export default annotationReducer;