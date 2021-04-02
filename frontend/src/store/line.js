import { csrfFetch } from './csrf';

const LOAD = 'line/LIST';
const ONE = 'line/ONE'

const getList = list => ({
    type: LOAD,
    list
})

const getOne = line => ({
    type: ONE,
    line
})

const initialState = {
    list: [],
    types: []
};

export const getLines = () => async dispatch => {
    const response = await fetch('/api/lines');
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


const lineReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD: {
            const allLines = {};
            action.list.forEach(annotation => {
                allAnnotations[annotation.id] = annotation;
            });
            return {
                ...allLines,
                ...state,
                list: action.list
            }
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
        default:
            return state;
    }
};

export default lineReducer;