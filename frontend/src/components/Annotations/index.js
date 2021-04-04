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
import './Annotation.css'

function Annotations ({lineId}) {
    console.log(lineId)
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
            <div id='please-Login-div'>
                <span className='login-idiot-user'>You have to login to annotate, Idiot</span>
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

    console.log(user)
    return(
        <div className='Annotation'>
            <span className='annotation-text'>{annotation.body}</span>
            <div className='button-box'>
                {
                    user.id === annotation.userId?
                    <EditAnnotationForm prop={editProp}/>:null
                }
                {
                    user.id === annotation.userId?
                    <button className= 'content-button' onClick={()=> dispatch(lineActions.removeAnnotation(annotation.id, lineId))}>Delete Annotation</button>: null
                }
            </div>
            <Comment annotationId={annotation.id}/>
            <CommentFormModal annotationId={annotation.id} />
        </div>
    )

}
export default Annotations;