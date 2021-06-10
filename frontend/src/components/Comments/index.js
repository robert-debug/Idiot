import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as commentActions from '../../store/comment';
import CommentFormModal from '../CommentFormModal'
import EditCommentForm from '../EditCommentForm';
import './Comments.css'

const Comments = ({ prop }) => {
    const trackId = prop
    const dispatch = useDispatch();
    const commentObjects= useSelector(state => {
        return state.comment
    })
    const comments = Object.values(commentObjects);
    comments.pop()
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

    console.log(comments)
    return(
        <div className='Comments'>
            <h3>Comments</h3>
            { comments.map( (comment, i )=>{

                const prop = {body: comment.body, commentId : comment.id, userId: comment.userId};
                return(
                        <div key={comment.id} className='comment-div'>
                            {console.log(comment.id)}
                            <span className='comment-span' key={comment.body}>{comment.body}</span>
                            {
                                user.id === comment.userId?
                                <div class='comment-button-div'>
                                <EditCommentForm key={i} prop={prop} />
                                <button className= 'content-button' onClick={()=> dispatch(commentActions.removeComment(comment.id))}>Delete</button>
                                </div>
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