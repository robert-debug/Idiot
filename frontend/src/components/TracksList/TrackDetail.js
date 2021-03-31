import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
let lines= {};
let annotation= {};
let comment = {};


const displayComments = event => {
    return null;
}
const displayAnnotation = event => {
    let lineId = event.currentTarget.dataset.line_id;
    let clickedLine = lines[lineId]
    let clickedAnnotation = clickedLine.Annotation;
    if (!clickedAnnotation) return null; //eventually returns annotation form 
    console.log(clickedAnnotation)
    annotation[clickedAnnotation.id] = clickedAnnotation;
    return (
    <div key={clickedAnnotation.id} data-annotation_id={clickedAnnotation.id} className='annotation'>{clickedAnnotation.body}</div>
    )
}
const displayLines = track => {
    track.Lines.forEach(line => {
        lines[line.id] = line;
    })
    console.log(lines)
    return(
        <div className='lyrics'>
         {track.Lines.map( line => <p key={line.id} data-line_id={line.id} onClick={displayAnnotation} className='line'>{line.linetext}</p>)}
        </div>
    )
}
function TrackDetail ({ track }) {
    const [show, setShow] = useState(false);
    const clickShow = () => {setShow(!show)};

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
                displayLines(track) : null
            }

        </div>
    )
};
export default TrackDetail;