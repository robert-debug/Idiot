import React, { useState } from "react";
import * as annotationActions from "../../store/annotation";
import { useDispatch, useSelector } from "react-redux";


function EditAnnotationForm({ annotationId, body }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [newBody, setBody] = useState(body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(annotationActions.createAnnotation({ body: newBody, userId, lineId  })).catch(
    // //   async (res) => {
    // //     const data = await res.json();
    // //     if (data && data.errors) setErrors(data.errors);
    //   }
    );
  };

  return (
    <form className='edit-annotation-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Edit your wisdom!
        <textarea
          value={newBody}
          cols='80'
          rows= '6'
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditAnnotationForm;