import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getTracks } from '../../store/track';


function TrackList () {
    const dispatch = useDispatch();
    const tracks = useSelector(state => {
        return state.track.list.map(trackId=>state.track[trackId])
    })
    useEffect(()=>{
        dispatch(getTracks());
    },[dispatch]);
    if (!tracks) return null;

    return (
        <main>
            {tracks.map((track)=> {
                return (
                    <NavLink key={track.id} to={`/tracks/${track.id}`}>
                        <div className='track'>
                            {track.title}
                        </div>
                    </NavLink>
                )
            })}
        </main>
    )
}

export default TrackList;