import { useState } from 'react';
import './Tracks.css';
import AnnotationForm from '../AnnotationFormModal/index'
import CommentForm from '../CommentFormModal'
import { useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
function TrackDetail ({ track }) {
    const [show, setShow] = useState(false);
    const [annotationVisibility, setAnnotationVisibility] = useState(false)
    const clickShow = () => {setShow(!show)};
    const clickAnnotation = () => (setAnnotationVisibility(!annotationVisibility));
    let lines= {};
    let annotation= {};
    // let comment = {};
    const sessionUserId = useSelector(state => state.session.user.id);
    console.log(sessionUserId)
    
    const displayAnnotation = lineId => {
        let clickedLine = lines[lineId]
        let clickedAnnotation = clickedLine.Annotation;
        console.log(clickedAnnotation)
        annotation[clickedAnnotation.id] = clickedAnnotation;
        return (
            <div className='ann+comment'>
                <div className='annotation'>{clickedAnnotation.body}</div>
                {clickedAnnotation.Comments.map(comment =>{
                    return(
                        <>
                        <div key={comment.id} className='comments'>{comment.body}</div>
                        {
                            sessionUserId === comment.id?
                            <button key={comment.id}>Delete</button> : null
                        }
                        </>
                    )
                }) }
                <CommentForm annotationId={clickedAnnotation.id} />
            </div>
            )
        
    }
    const displayLines = track => {
        track.Lines.forEach(line => {
            lines[line.id] = line;
        })
        console.log(lines)
        
        return(
            <div key={track.id} className='lyrics'>
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
                            <AnnotationForm key={line.ordernum}lineId={line.id} /> : null
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