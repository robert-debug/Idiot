import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as lineActions from '../../store/line';


function LineList () {
    const dispatch = useDispatch();
    const lines = useSelector(state => {
        return state.line.list
    })
    useEffect(()=>{
        dispatch(lineActions.getLines());
    },[dispatch]);
    if (!lines) return null;

    
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

export default LineList;