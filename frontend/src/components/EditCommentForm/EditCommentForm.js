import React, { useState } from "react";
import * as commentActions from "../../store/comment";
import { useDispatch, useSelector } from "react-redux";


function EditCommentForm({props}) {
  console.log(props.prop)
  const setShowModal = props.setShowModal
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [newBody, setBody] = useState(props.prop.body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setShowModal(false)
    return dispatch(commentActions.updateComments({ body: newBody, commentId: props.prop.commentId } )).catch(
    // //   async (res) => {
    // //     const data = await res.json();
    // //     if (data && data.errors) setErrors(data.errors);
    //   }
    );
  };

  return (
    <>
    <p>Edit your wisdom!</p>
    <form className='form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        <textarea
          className='text-area'
          value={newBody}
          cols='80'
          rows= '6'
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <button  type="submit">Save</button>
    </form>
    </>
  );
}

export default EditCommentForm;