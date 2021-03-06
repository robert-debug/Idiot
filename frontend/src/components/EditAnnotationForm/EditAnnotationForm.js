import React, { useState } from "react";
import * as annotationActions from "../../store/line";
import { useDispatch } from "react-redux";


function EditAnnotationForm( { props } ) {
  const { body, annotationId, setShowModal } = props
  const dispatch = useDispatch();
  const [newBody, setBody] = useState(body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setShowModal(false)
    dispatch(annotationActions.updateAnnotation({ body: newBody, annotationId })).catch(
      // async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) setErrors(data.errors);
      // }
    );
  };

  return (
    <>
    <p id='knowledge'>Edit your wisdom!</p>
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
          value={newBody}
          cols='80'
          rows= '6'
          onChange={(e) => setBody(e.target.value)}
          required
        />
      <button className='save-button' type="submit">Save</button>
    </form>
    </>
  );
}

export default EditAnnotationForm;