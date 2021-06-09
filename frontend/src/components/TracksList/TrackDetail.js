import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Tracks.css';
import { getOneTrack } from '../../store/track';
import Lines from '../Lines/index';
import Comments from '../Comments/index'
import { useSelector, useDispatch } from "react-redux";

function TrackDetail () {
    const trackId = useParams().id;
    
    const dispatch = useDispatch();
    let track = useSelector(state => state.track[trackId]);
    useEffect(() => {
        dispatch(getOneTrack(trackId))
    }, [])
    const linesObjects = useSelector(state => {
        return state.line
    })
    const lines = Object.values(linesObjects)
    if (!track) return null;
    return (
        <div key={track.id} className='track-details'>
            <h2 className='title'>{track.title}</h2>
            <p className='artist'>{track.artist}</p>
            <p className= 'album'>album: {track.album}</p>
            {
                lines.map((line)=>
                    <Lines key={line.id} line={line} />
                )
            }
            <Comments prop={track.id} />
            
            
            <nav className ='back-button-nav'>
                <NavLink className='back-button' to='/'>Back</NavLink>
            </nav>
        </div>
    )

};
export default TrackDetail;