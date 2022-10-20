import {React, useReducer} from 'react';
import {postReducer, INITIAL_STATE} from './postReducer';
import { ACTION_TYPES } from './postActionTypes';

const Reducer = () => {

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({type:ACTION_TYPES.FETCH_START})
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({type:ACTION_TYPES.FETCH_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type:ACTION_TYPES.FETCH_ERROR})
    })
  }

  return (
    <div>
      <button onClick={handleFetch}>
      {state.loading ? "loading..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  )
}

export default Reducer;
