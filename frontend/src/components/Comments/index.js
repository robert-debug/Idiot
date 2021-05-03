import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as commentActions from '../../store/comment';
import CommentFormModal from '../CommentFormModal'
import EditCommentForm from '../EditCommentForm';
import './Comments.css'

const Comments = ({ prop }) => {
    const trackId = prop
    const deleteImage = require('../../assets/delete.png')
    const dispatch = useDispatch();
    const commentObjects= useSelector(state => {
        return state.comment
    })
    const comments = Object.values(commentObjects);
    console.log(comments)
    let user = useSelector(state => state.session.user)
    if(!user) user = {'id' : 0}
    useEffect(()=>{
        dispatch(commentActions.getComments(trackId));
    }, [dispatch]);
 
    if (!comments && !user) {
        return null;

    }
    if(!comments && user.id !== 0) {
        return(
            <div className='annotation-form-div'>
                <CommentFormModal trackId={trackId}/>
            </div>
        )
    }

    
    return(
        <div className='Comments'>
            { comments.map( (comment, i )=>{

                const prop = {body: comment.body, commentId : comment.id, userId: comment.userId};
                return(
                        <div key={comment.id} className='comment-div'>
                            <span className='comment-span' key={comment.body}>{comment.body}</span>
                            {
                                user.id === comment.userId?
                                <>
                                <EditCommentForm key={i} prop={prop} />
                                <button className= 'content-button' onClick={()=> dispatch(commentActions.removeComment(comment.id))}>Delete</button>
                                </>
                                :null
                            }
                        </div>
                    )})}
    

            <div className='annotation-form-div'>
                <CommentFormModal trackId={trackId}/>
            </div>
            </div>)
}


export default Comments;