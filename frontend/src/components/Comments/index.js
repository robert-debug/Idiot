import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as commentActions from '../../store/comment';
import CommentFormModal from '../CommentFormModal'
import EditCommentForm from '../EditCommentForm';
import './Comments.css'

const Comments = ({ prop }) => {
    const trackId = prop
    const dispatch = useDispatch();
    const comments= useSelector(state => {
        return state.comment.list
    })
    const commentLength = useSelector(state => {
        return state.comment.list.length
    })
    const sessionUser = useSelector(state => state.session.user.username)
    // const comments = commentObjects
    // comments.pop()
    let user = useSelector(state => state.session.user)
    if(!user) user = {'id' : 0}
    useEffect(()=>{
        dispatch(commentActions.getComments(trackId));
    }, [dispatch, commentLength]);
 
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
            <h3>Comments</h3>
            { comments.map( (comment, i )=>{
                console.log(comment)
                const prop = {body: comment.body, commentId : comment.id, userId: comment.userId};
                return(
                        <div key={comment.id} className='comment-div'>
                            <span className='comment-span' key={comment.body}>{comment.body}</span>
                            <span className='comment-span'>{`by ${comment.User ? comment.User.username : sessionUser}`}</span>
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