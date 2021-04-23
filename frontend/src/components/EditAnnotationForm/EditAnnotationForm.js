import React, { useState } from "react";
import * as annotationActions from "../../store/line";
import { useDispatch, useSelector } from "react-redux";


function EditAnnotationForm( { props } ) {
  console.log(props)
  // we have data now, but we need to fix annotation form, get submit to change modal state.
  const { body, annotationId, showModal } = props
  console.log('now now now', body, annotationId)
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [newBody, setBody] = useState(body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(annotationActions.updateAnnotation({ body: newBody, annotationId })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
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
      <button type="submit">Save</button>
    </form>
    </>
  );
}

export default EditAnnotationForm;