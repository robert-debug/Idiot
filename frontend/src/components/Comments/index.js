import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as commentActions from '../../store/comment';
import CommentFormModal from '../CommentFormModal'
import EditCommentForm from '../EditCommentForm';

const Comments = ({annotationId}) => {
    const editProp={}
    const dispatch = useDispatch();
    const commentObjects= useSelector(state => {
        return state.comment
    })
    const comments = Object.values(commentObjects);
    const user = useSelector(state => {
        return state.session.user;
    })
    useEffect(()=>{
        dispatch(commentActions.getComments(annotationId));
    },[dispatch]);
 
    if (!comments && !user) {
        return null;

    }
    if(!comments && user) {
        return(
            <div className='annotation-form-div'>
                <CommentFormModal annotationId={annotationId}/>
            </div>
        )
    }

    
    return(
        <div className='Comments'>
            { comments.map( (comment, i )=>{
                const prop = {body: comment.body, commentId : comment.id, userId: comment.userId};
                return(
                <div key={comment.id} className='comment-div'>
                    <p key={comment.body}>{comment.body}</p>
                    {
                        user.id === comment.userId?
                        <EditCommentForm key={i} prop={prop} />:null
                    }
                </div>
                )

            })}

        </div>
    )

}


export default Comments;