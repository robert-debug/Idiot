const LOAD = 'tracks/LOAD'
const ONE = 'tracks/ONE'
const load = tracks => ({
    type: LOAD,
    tracks
})

const one = track => ({
    type: ONE,
    track
})

export const getTracks = () => async dispatch => {
    const response = await fetch('/api/tracks');

    if(response.ok) {
        const trackList = await response.json();
        dispatch(load(trackList))
    }
}

export const getOneTrack = id => dispatch => {
    const response = await fetch(`/api/tracks/${id}`);

    if (response.ok) {
        const track = await response.json();
        dispatch(one(track));
    }
}

const initialState = {
    list: [],
    types: []
}

const trackReducer = (state = initialState, action) => {
    
}