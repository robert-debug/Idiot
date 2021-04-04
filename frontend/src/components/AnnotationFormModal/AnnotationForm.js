import React, { useState } from "react";
import {createAnnotation} from "../../store/line";
import { useDispatch, useSelector } from "react-redux";


function AnnotationForm({ lineId }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(createAnnotation({ body, userId, lineId  })).catch(
    // //   async (res) => {
    // //     const data = await res.json();
    // //     if (data && data.errors) setErrors(data.errors);
    //   }
    );
  };

  return (
    <>
      <p>Drop some knowledge on us!</p>
      <form className='form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          <textarea className='text-area'
            value={body}
            cols='60'
            rows= '4'
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default AnnotationForm;