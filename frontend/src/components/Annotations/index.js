import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as annotationActions from '../../store/annotation';
import * as lineActions from '../../store/line'
import Comment from '../Comments';
import LoginFormModal from '../LoginFormModal';
import AnnotationFormModal from '../AnnotationFormModal';
import CommentFormModal from '../CommentFormModal'
import commentActions from '../../store/comment';
import EditAnnotationForm from '../EditAnnotationForm';
import {useTrack} from '../../context/Track'
import {getLines} from '../../store/line';
import './Annotation.css'

function Annotations ({lineId}) {
    console.log(lineId)
    const {trackId} = useTrack();
    const editProp={}
    const dispatch = useDispatch();
    const prop = {}
    const annotation = useSelector(state => {
        return state.line[lineId].Annotation
    })
    const commentObjects= useSelector(state => {
        return state.comment
    })
    const commentArray = [];
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
        prop.annotationId = annotation.id;
        prop.lineId = lineId;
        // console.log(annotation)
        // console.log(editProp)
        for (let key in commentObjects) {
            if (commentObjects[key].annotationId === annotation.id){
                commentArray.push(commentObjects[key]);
            }
        }
    }
    console.log(prop)
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
            <Comment prop={prop}/>
            <CommentFormModal prop={prop} />
        </div>
    )

}
export default Annotations;