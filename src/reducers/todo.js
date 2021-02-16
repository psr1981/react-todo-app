const initState = {
    todos : [],
    currentTodo:''
}
  
const TODO_ADD='TODO_ADD'
const CURRENT_TODO_UPDATE='CURRENT_TODO_UPDATE'
const FETCH_TODO = 'FETCH_TODO'
const CANCEL_REQUEST= 'CANCEL_REQUEST'
const FAILED_REQUEST = 'FAILED_REQUEST'
const FETCH_TODO_SUCCESS= 'FETCH_TODO_SUCCESS'
const FETCH_TODO_FAILED = 'FETCH_TODO_ERROR'
const SAVE_TODO = 'SAVE_TODO'


export { FETCH_TODO, TODO_ADD, SAVE_TODO, FETCH_TODO_FAILED, FETCH_TODO_SUCCESS, CANCEL_REQUEST, FAILED_REQUEST }
export const updateCurrentTodo = (val) => ({type:CURRENT_TODO_UPDATE, payload: val})
export const saveTodo = (val) => ({type:SAVE_TODO, payload: val})
export const fetchTodos = () => ({type:FETCH_TODO, payload: null})


export default (state=initState, action) => {
    switch(action.type) {
        case TODO_ADD:
            return {...state, currentTodo : '', todos: state.todos.concat(action.payload)}
        case FETCH_TODO_SUCCESS:
                return {...state, todos: action.payload}
        case CURRENT_TODO_UPDATE:
            return {...state, currentTodo: action.payload}
        default:
            return state 
    }
}