import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as lineActions from '../../store/line';
import Annotation from '../Annotations';
import {useTrack} from '../../context/Track'

function LineList ({line}) {
    const dispatch = useDispatch();
    const {trackId} = useTrack();
    const [annotationVisibility, setAnnotationVisibility] = useState(false)
    const clickLine = () => (setAnnotationVisibility(!annotationVisibility));

    useEffect(()=>{
        dispatch(lineActions.getLines(trackId));
    },[dispatch]);
    
    // console.log(lines)

    
    return(
        <div className='lyric'>
                <div key={line.id} className='line-div'>
                    <p onClick={clickLine} className='line'>{line.linetext}</p>

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