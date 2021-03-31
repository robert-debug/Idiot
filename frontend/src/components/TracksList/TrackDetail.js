import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneTrack } from '../../store/track';

function TrackDetail ({ track }) {
    const [show, setShow] = useState(false);
    const trackId = useParams();
    const dispatch = useDispatch();
    // const track = useSelector((state)=>{
    //     return state.track[trackId];
    // })
    console.log(track)
    useEffect(()=>{
        dispatch((getOneTrack(trackId)));
    }, [dispatch, trackId])
   
    return (
        <div className='track'>
            <h2 className='title' onClick={()=>setShow(!show)}>{track.title}</h2>
            <p className='artist'>{track.artist}</p>
            {
                show?
                <p className= 'album'>{track.album}</p> : 
                null
            }
        </div>
    )
};
export default TrackDetail;