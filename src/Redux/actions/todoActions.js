import {FETCH_TODO} from '../types'

export const fetchTodo = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todo => {
        console.log(todo)
        
        dispatch({
            type:FETCH_TODO,
            payload:todo
        })
})
}