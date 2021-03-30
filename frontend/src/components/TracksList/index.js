import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getTracks } from '../../store/track';


function TrackList () {
    const dispatch = useDispatch();
    const tracks = useSelector(state => {
        console.log(state.track.list)
        return state.track.list
    })
    useEffect(()=>{
        dispatch(getTracks());
    },[dispatch]);
    console.log(tracks)
    if (!tracks) return null;

    return (
        <main>
            {tracks.map((track)=> {
                return (
                    <NavLink key={track.id} to={`/tracks/${track.id}`}>
                        <div className='track'>
                            <h2 className='title'>{track.title}</h2>
                            <p className='artist'>{track.artist}</p>
                        </div>
                    </NavLink>
                )
            })}
        </main>
    )
}

export default TrackList;