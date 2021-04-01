import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AnnotationForm from './AnnotationForm';
import { useSelector } from "react-redux";
import LoginFormModal from '../LoginFormModal';

function AnnotationFormModal({ lineId }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  if(sessionUser) {

    return(
        <>
            <button onClick={() => setShowModal(true)}>Start the Idiot Annotation</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AnnotationForm lineId={lineId}  />
                    </Modal>
      )}
      </>)
    } else {
        return(
                <div className='loginToAnnotate'>
                    <h2>Login to start Annotating!</h2>
                    <LoginFormModal />
                </div>
        )

    }
}

export default AnnotationFormModal;