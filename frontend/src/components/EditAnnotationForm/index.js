import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux";
import EditAnnotationForm from './EditAnnotationForm'


function EditAnnotationFormModal({ annotationId, userId, body }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const prop = {annotationId, body}
    return(
        <>
            <button onClick={() => setShowModal(true)}>Edit Annotation</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditAnnotationForm props={prop}  />
                    </Modal>
      )}
      </>)
         
}

export default EditAnnotationFormModal;