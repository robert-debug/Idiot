import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom';
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
                    // <NavLink key={track.id} to={`/tracks/${track.id}`}>
                    //     <div className='track'>
                    //         <h2 className='title'>{track.title}</h2>
                    //         <p className='artist'>{track.artist}</p>
                    //     </div>
                    // </NavLink>
                    <TrackDetail track= {track}></TrackDetail>

                )
            })}
            {/* <Switch>
                <Route path='/api/tracks/:trackId'>
                    <TrackDetail/>
                </Route>
            </Switch> */}
        </main>
    )
}

export default TrackList;