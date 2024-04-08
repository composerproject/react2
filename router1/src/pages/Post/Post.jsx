import React from 'react'
import {useParams} from 'react-router-dom'
import { usePostContext } from '../../utils/postContext'

function Post() {
  const [state] = usePostContext()
  let {id} = useParams();
  id = +id;

  const post = state.posts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div>Post n° {id}</div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </>
  )
}

export default Post