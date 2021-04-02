import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTracks } from '../../store/track';
import TrackDetail from './TrackDetail';
import { NavLink } from 'react-router-dom';
import { useTrack } from '../../context/Track';


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
                <nav>
                    <NavLink to='/tracks' oncClick>
                        <h2 className='title'>{track.title}</h2>
                    </NavLink>
                    <p className='artist'>{track.artist}</p>
                </nav>
                )
            })}
        </main>
    )
}

export default TrackList;