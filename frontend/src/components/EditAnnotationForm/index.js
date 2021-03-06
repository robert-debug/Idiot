import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux";
import EditAnnotationForm from './EditAnnotationForm'


function EditAnnotationFormModal( { editProp } ) {

  const body = editProp.body
  const annotationId = editProp.annotationId
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const prop = { body, annotationId, setShowModal }

    return(
        <>
            <button className= 'annotation-button' onClick={() => setShowModal(true)}>Edit Annotation</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditAnnotationForm props={prop}  />
                    </Modal>
      )}
      </>)
         
}

export default EditAnnotationFormModal;