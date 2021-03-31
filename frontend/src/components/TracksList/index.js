import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTracks } from '../../store/track';
import TrackDetail from './TrackDetail';


function TrackList () {
    const dispatch = useDispatch();
    const tracks = useSelector(state => {
        return state.track.list
    })
    useEffect(()=>{
        dispatch(getTracks());
    },[dispatch]);
    if (!tracks) return null;

    return (
        <main>
            {tracks.map((track)=> {
                return (
                    <TrackDetail track= {track}></TrackDetail>
                )
            })}
        </main>
    )
}

export default TrackList;