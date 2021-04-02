import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTracks } from '../../store/track';
import TrackDetail from './TrackDetail';


function TrackList () {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment)
    const annotations = useSelector(state => state.annotations)
    const tracks = useSelector(state => {
        return state.track.list
    })
    useEffect(()=>{
        dispatch(getTracks());
    },[dispatch, comments, annotations ]);
    if (!tracks) return null;

    return (
        <main>
            {tracks.map((track)=> {
                return (
                    <TrackDetail track= {track} key={track.id}></TrackDetail>
                )
            })}
        </main>
    )
}

export default TrackList;