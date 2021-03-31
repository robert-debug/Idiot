const LOAD = 'tracks/LOAD'
const ONE = 'tracks/ONE'
const load = list => ({
    type: LOAD,
    list
})

// const one = track => ({
//     type: ONE,
//     track
// })

export const getTracks = () => async dispatch => {
    const response = await fetch('/api/tracks');
    if(response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

// export const getOneTrack = id => async dispatch => {
//     const response = await fetch(`/api/tracks/${id}`);

//     if (response.ok) {
//         const track = await response.json();
//         dispatch(one(track));
//     }
// };

const initialState = {
    list: [],
    types: []
};

const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allTracks = {};
            action.list.forEach(track => {
                allTracks[track.id] = track;
            });
            return {
                ...allTracks,
                ...state,
                list: action.list
            }
        }
        // case ONE: {
        //     return {
        //         ...state,
        //         [action.track.id]: {
        //             ...state[action.track.id],
        //             ...action.track
        //         }
        //     }
        // }
        default:
            return state;
    }
};

export default trackReducer;