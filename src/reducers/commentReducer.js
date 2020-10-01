export const commentReducer = (state=[], action) => {
  switch (action.type) {
    case 'addComment':
      return [...state, action.payload]

    case 'deleteComment':
      return state.filter( comment => comment.id !== action.payload )  
      
  
    default:
      return state
  }
}