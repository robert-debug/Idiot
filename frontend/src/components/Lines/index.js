import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as lineActions from '../../store/line';
import Annotation from '../Annotations';


function LineList () {
    const dispatch = useDispatch();
    const [annotationVisibility, setAnnotationVisibility] = useState(false)
    const clickLine = () => (setAnnotationVisibility(!annotationVisibility));
    const lines = useSelector(state => {
        return state.line.list
    })
    useEffect(()=>{
        dispatch(lineActions.getLines());
    },[dispatch]);
    if (!lines) return null;

    
    return(
        <div className='lyrics'>
         {lines.map( line => {
            return (
                <>
                <p key={line.id}  onClick={clickLine} className='line'>{line.linetext}</p>
                
                {
                    annotationVisibility?
                    <Annotation /> : null

                }
                </>
            )
         }
         )}
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