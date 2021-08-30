import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTracks } from '../../store/track';
import { resetComment } from '../../store/comment'
import TrackDetail from './TrackDetail';
import { NavLink } from 'react-router-dom';
import { useTrack } from '../../context/Track';
import './Tracks.css'


function TrackList () {
    const dispatch = useDispatch();
    const { setTrackId } = useTrack();
    const tracks = useSelector(state => {
        return state.track.list
    })
    useEffect(()=>{
        dispatch(getTracks());
    },[dispatch]);
    useEffect(()=>{
        dispatch(resetComment())
    }, [])
    if (!tracks) return null;
    const clickHandler = (trackId) => {
        setTrackId(trackId)
    }

    return (
        <main>
            {tracks.map((track)=> {
                return (
                <nav className='track-nav-link'>
                    <NavLink to={`/tracks/${track.id}`} onClick={() => clickHandler(track.id)}>
                        <h2 className='track-title'>{track.title}</h2>
                    </NavLink>
                    <p className='artist'>{track.artist}</p>
                </nav>
                )
            })}
        </main>
    )
}

export default TrackList;