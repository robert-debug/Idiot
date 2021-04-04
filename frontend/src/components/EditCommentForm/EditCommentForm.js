import React, { useState } from "react";
import * as commentActions from "../../store/annotation";
import { useDispatch, useSelector } from "react-redux";


function EditCommentForm({ commentId, body }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [newBody, setBody] = useState(body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(commentActions.createAnnotation({ body: newBody })).catch(
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
      <button className= 'content-button' type="submit">Save</button>
    </form>
    </>
  );
}

export default EditCommentForm;