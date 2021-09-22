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
    const {trackId} = useTrack();
    const editProp={}
    const dispatch = useDispatch();
    const prop = {}
    const annotation = useSelector(state => {
        return state.line[lineId].Annotation
    })
    const sessionUser = useSelector(state => state.session.user.username)
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
        for (let key in commentObjects) {
            if (commentObjects[key].annotationId === annotation.id){
                commentArray.push(commentObjects[key]);
            }
        }
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

    return(
        <div className='Annotation'>
            <span className='annotation-text'>{annotation.body}</span>
            <span className='annotation-text-name'>{`by ${annotation.User ? annotation.User.username :  sessionUser}`}</span>
            {user ?
            <div className='button-box'>
                {
                    user.id === annotation.userId?
                    <EditAnnotationForm editProp={editProp}/>:null
                }
                {
                    user.id === annotation.userId?
                    <button className= 'annotation-button' onClick={()=> dispatch(lineActions.removeAnnotation(annotation.id, lineId))}>Delete Annotation</button>: null
                }
            </div> : null}
        </div>
    )

}
export default Annotations;