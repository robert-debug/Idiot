import React, { useState } from "react";
import * as commentActions from "../../store/comment";
import { useDispatch, useSelector } from "react-redux";
import './CommentForm.css'

function CommentForm({ props }) {
  const trackId = props.trackId 
  const setShowModal  = props.setShowModal;
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setShowModal(false)
    dispatch(commentActions.createComment({ body, userId, trackId  })).catch(
      // //   async (res) => {
    // //     const data = await res.json();
    // //     if (data && data.errors) setErrors(data.errors);
    //   }
    );
  };

  return (
    <>
    <p id='knowledge'>Do you know what opinions are like? Everyone has one.</p>
    <form className='form' onSubmit={handleSubmit}>
      { errors.length === 0 ? null :
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>}
       <label>
        </label>
          <textarea
            className='text-area'
           value={body}
           cols='50'
           rows= '4'
           onChange={(e) => setBody(e.target.value)}
           required
          />
        <button className='save-button' type="submit">Save</button>
      </form>
    </>
  );
}

export default CommentForm;