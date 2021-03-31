import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneTrack } from '../../store/track';
let lines= {};
let annotation;
const makeLines = track => {
    track.Lines.forEach(line => {
        lines[line.id] = line;
    })
    console.log(lines)
    return track.Lines.map( line => <p key={line.id} className='line'>{line.linetext}</p>)
}
const makeAnnotations = line => {
    return line.Annotation.map( annotation => <div key={annotation.id} className='annotation'>{annotation.test}</div>)
}
function TrackDetail ({ track }) {
    const [show, setShow] = useState(false);
    const trackId = useParams();
    const dispatch = useDispatch();
    const clickShow = () => {setShow(!show)};

    // const track = useSelector((state)=>{
    //     return state.track[trackId];
    // })
    console.log(track)
    // useEffect(()=>{
    //     dispatch((getOneTrack(trackId)));
    // }, [dispatch, trackId])
   
    return (
        <div className='track'>
            <h2 className='title' onClick={clickShow}>{track.title}</h2>
            <p className='artist'>{track.artist}</p>
            {
                show?
                <p className= 'album'>album: {track.album}</p> : null  
            }
            {
                show?
                makeLines(track) : null
            }

        </div>
    )
};
export default TrackDetail;