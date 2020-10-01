import React, { useEffect, useReducer } from "react";
import { useForm } from "../hooks/useForm";
import { commentReducer } from "../reducers/commentReducer";
import './styles/commentBox.scss'


function CommentBox() {

  
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
  }

  const [{description}, handleInputchange, reset ] = useForm({
    description: '',
  });


  const [ comments, dispatch ] = useReducer(commentReducer, [], init)

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      
      id: new Date().getTime(),
      desc: description //contenido del comentario
      
    }

    const commentAction = {
      type: 'addComment',
      payload: newComment
    }

    dispatch(commentAction);
    reset();
  }

  const handleDeleteComment = ( commentId ) => {
    const commentAction = {
      type: 'deleteComment',
      payload: commentId
    }

    dispatch(commentAction);
  }

  return <div className='commentBox'>
    <div className='commentBox__title'>comments</div>
    <div className='commentBox__items'>
      
      <ul>
        {
          comments.map(comment => (
            <li key={comment.id}>
              <span         
                className='commentBox__items--comment'>
                <div>
                  <img src='https://www.flaticon.com/svg/static/icons/svg/2922/2922510.svg' alt='profile photo' />
                </div>
                <p> {comment.desc}</p>
                <button 
                  className='commentBox__items--button'
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  x
                </button>
              </span>              
            </li>
          ))
        }
      </ul>
      
      <div className='commentBox__input--container'>
        
        <form onSubmit={handleSubmit}>
          <input
            name='description' //nombre para luego llamar el valor agregado
            className='commentBox__input'
            type='text'
            value={description}         
            autoComplete='off' 
            placeholder='Add your comment' 
            onChange={handleInputchange}
          />
          <button
            className='commentBox__input--button'
            type='submit' 
          >
            <div>&#10010;</div>
          </button>

        </form>
        
      </div>
    </div>
  </div>
  
}


export default CommentBox;
