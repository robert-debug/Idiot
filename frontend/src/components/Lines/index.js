import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as lineActions from '../../store/line';
import Annotation from '../Annotations';
import {useTrack} from '../../context/Track'
import './Lines.css'
function LineList ({line}) {
    const dispatch = useDispatch();
    const trackId = useParams().id;
    const [annotationVisibility, setAnnotationVisibility] = useState(false)
    const clickLine = () => (setAnnotationVisibility(!annotationVisibility));

    useEffect(()=>{
        dispatch(lineActions.getLines(trackId));
    },[dispatch]);
    

    
    return(
        <div className='lyric'>
                <div key={line.id} className='line-div'>
                    <p onMouseUp={clickLine} className='line' id={line.Annotation !== null ? 'background': null}>{line.linetext}</p>

                    {
                        annotationVisibility?
                        <Annotation lineId={line.id}/> : null

                    }
                </div>
        
         
         
         </div>
    )
}
export default LineList;
        

                        //sessionUser.id === line.Annotation.userId?
        
                        //<button key={line.id*100} onClick={()=> //dispatch(annotationActions.removeAnnotation(line.Annotation.id))}>Delete Annotation</button> : null : null :null
        
                     
        //             <p key={line.id} onClick={clickAnnotation} className='line'>{line.linetext}</p>
        //             
        //                 annotationVisibility?
        //                 <AnnotationForm lineId={line.id} /> : null
        //             }
        //             </>
        //         )
        //     }
        //     }
        // )}