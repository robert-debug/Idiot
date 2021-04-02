import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux";
import EditCommentForm from './EditCommentForm'


function EditCommentFormModal({ commentId, userId, body }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const prop = {commentId, body}
  if(sessionUser) {  
      if(sessionUser.id === userId){
    return(
        <>
            <button onClick={() => setShowModal(true)}>Edit Comment</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditCommentForm props={...prop}  />
                    </Modal>
      )}
      </>)
        }
    }    
}

export default EditCommentFormModal;