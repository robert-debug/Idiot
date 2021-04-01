import { useState } from 'react';
import './Tracks.css';
import AnnotationForm from '../AnnotationForm/index'
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
function TrackDetail ({ track }) {
    const [show, setShow] = useState(false);
    const [annotationVisibility, setAnnotationVisibility] = useState(false)
    const clickShow = () => {setShow(!show)};
    const clickAnnotation = () => (setAnnotationVisibility(!annotationVisibility));
    let lines= {};
    let annotation= {};
    // let comment = {};
    
    const displayAnnotation = lineId => {
        let clickedLine = lines[lineId]
        let clickedAnnotation = clickedLine.Annotation;
        if (!clickedAnnotation) return null; //eventually returns annotation form or login prompt
        console.log(clickedAnnotation)
        annotation[clickedAnnotation.id] = clickedAnnotation;
        return (
            <div className='ann+comment'>
                <div className='annotation'>{clickedAnnotation.body}</div>
                {clickedAnnotation.Comments.map(comment =>{
                    return(
                        <div key={comment.id} className='comments'>{comment.body}</div>
                    )
                }) }
            </div>
            )
        
    }
    const displayLines = track => {
        track.Lines.forEach(line => {
            lines[line.id] = line;
        })
        console.log(lines)
        
        return(
            <div className='lyrics'>
             {track.Lines.map( line => {
                if (line.Annotation){
                return (
                    <>
                    <p key={line.id} data-line_id={line.id} onClick={clickAnnotation} className='line'>{line.linetext}</p>
                    {
                        annotationVisibility?
                        displayAnnotation(line.id) : null
                    }
                    </>
                )} else {
                    return (
                        <>
                        <p key={line.id} data-line_id={line.id} onClick={clickAnnotation} className='line'>{line.linetext}</p>
                        {
                            annotationVisibility?
                            <AnnotationForm lineId={line.id} /> : null
                        }
                        </>
                    )
                }
                }
            )}
            </div>
        )
                
    }
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