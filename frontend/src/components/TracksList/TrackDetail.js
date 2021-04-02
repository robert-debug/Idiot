import { useState } from 'react';
import './Tracks.css';
import AnnotationForm from '../AnnotationFormModal/index'
import CommentForm from '../CommentFormModal'
import { useSelector, useDispatch } from "react-redux";
import * as commentActions from "../../store/comment";
import * as annotationActions from "../../store/annotation";

function TrackDetail ({ track }) {
    const sessionUser = useSelector(state => state.session.user);
    const [show, setShow] = useState(false);
    const [annotationVisibility, setAnnotationVisibility] = useState(false)
    const clickShow = () => {setShow(!show)};
    const clickAnnotation = () => (setAnnotationVisibility(!annotationVisibility));
    const dispatch = useDispatch();
    let lines= {};
    let annotation= {};
    const onDeleteAnnotation = () => {
        setAnnotationVisibility(false);
        return dispatch(annotationActions.removeAnnotation(line.Annotation.id))
    }
    const displayAnnotation = lineId => {
        let clickedLine = lines[lineId]
        let clickedAnnotation = clickedLine.Annotation;
        console.log(clickedAnnotation)
        annotation[clickedAnnotation.id] = clickedAnnotation;
        return (
            <div key={lineId} className='ann+comment'>
                <div key={annotation.id*10} className='annotation'>{clickedAnnotation.body}</div>
                {clickedAnnotation.Comments.map(comment =>{
                    console.log(comment)
                    return(
                        <>
                        <div key={comment.id} className='comments'>{comment.body}</div>
                        {
                            
                            sessionUser?

                            sessionUser.id === comment.userId?
                            <button key={comment.id*1000} onClick={()=> dispatch(commentActions.removeComment(comment.id))}>Delete Comment</button> : null : null
                            
                        }

                        </>
                    )
                }) }
                <CommentForm key= 'form' annotationId={clickedAnnotation.id} />
            </div>
            )
        
    }
    const displayLines = track => {
        track.Lines.forEach(line => {
            lines[line.id] = line;
        })
        
        return(
            <div key={track.id*100} className='lyrics'>
             {track.Lines.map( line => {
                if (line.Annotation){
                return (
                    <>
                    <p key={line.id}  onClick={clickAnnotation} className='line'>{line.linetext}</p>
                    
                    {
                        annotationVisibility?
                        displayAnnotation(line.id) : null

                    }
                    {
                        annotationVisibility? 
                        sessionUser?
                        sessionUser.id === line.Annotation.userId?

                        <button key={line.id*100} onClick={()=> dispatch(annotationActions.removeAnnotation(line.Annotation.id))}>Delete Annotation</button> : null : null :null

                    }
                    </>
                )} else {
                    return (
                        <>
                        <p key={line.id} onClick={clickAnnotation} className='line'>{line.linetext}</p>
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
        <div key={track.id} className='track'>
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