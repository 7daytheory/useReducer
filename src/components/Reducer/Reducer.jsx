import {React, useReducer} from 'react';
import {postReducer, INITIAL_STATE} from './postReducer';

const Reducer = () => {

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({type:'FETCH_START'})
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({type:'FETCH_SUCCESS', payload: data})
    })
    .catch((err) => {
      dispatch({type:'FETCH_ERROR'})
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
