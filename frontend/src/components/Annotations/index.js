import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as annotationActions from '../../store/annotation';
import * as lineActions from '../../store/line'
import Comment from '../Comments';
import LoginFormModal from '../LoginFormModal';
import AnnotationFormModal from '../AnnotationFormModal';
import CommentFormModal from '../CommentFormModal'
import EditAnnotationForm from '../EditAnnotationForm';
import {useTrack} from '../../context/Track'
import {getLines} from '../../store/line';


function Annotations ({lineId}) {
    // console.log(lineId)
    const {trackId} = useTrack();
    const editProp={}
    const dispatch = useDispatch();
    const annotation = useSelector(state => {
        return state.line[lineId].Annotation
    })
    const user = useSelector(state => {
        return state.session.user;
    })

    useEffect(()=>{
        dispatch(annotationActions.getAnnotations(lineId));
        dispatch(getLines(trackId));
    },[dispatch]);
    if(annotation){
        editProp.body = annotation.body;
        editProp.annotationId = annotation.id;
        // console.log(annotation)
        // console.log(editProp)
    }
    if (!annotation && !user) {
        return(
            <div className='please-Login-div'>
                <h3>You have to login to annotate, Idiot</h3>
                <LoginFormModal />
            </div>
        )

    }
    if(!annotation && user) {
        return(
            <div className='annotation-form-div'>
                <AnnotationFormModal lineId={lineId}/>
            </div>
        )
    }

    
    return(
        <div className='Annotation'>
            <p>{annotation.body}</p>
            {
                user.id === annotation.userId?
                <EditAnnotationForm prop={editProp}/>:null
            }
            {
                user.id === annotation.userId?
                <button onClick={()=> dispatch(lineActions.removeAnnotation(annotation.id, lineId))}>Delete Annotation</button>: null
            }
            <Comment annotationId={annotation.id}/>
            <CommentFormModal annotationId={annotation.id} />
        </div>
    )

}
export default Annotations;