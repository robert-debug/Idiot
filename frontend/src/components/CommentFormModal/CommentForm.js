import React, { useState } from "react";
import * as commentActions from "../../store/comment";
import { useDispatch, useSelector } from "react-redux";


function LoginForm({ annotationId }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(commentActions.createComment({ body, userId, annotationId  })).catch(
    // //   async (res) => {
    // //     const data = await res.json();
    // //     if (data && data.errors) setErrors(data.errors);
    //   }
    );
  };

  return (
    <form className='new-comment-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Improve our annotations!
        <textarea
          value={body}
          cols='50'
          rows= '4'
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default LoginForm;