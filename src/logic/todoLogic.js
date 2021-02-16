import {createLogic} from 'redux-logic'
import {FETCH_TODO, TODO_ADD, CANCEL_REQUEST, FAILED_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILED, SAVE_TODO} from '../reducers/todo'
import axios from 'axios'

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

const fetchTodosLogic = createLogic({
    type: FETCH_TODO, // only apply this logic to this type
    cancelType: CANCEL_REQUEST, // cancel on this type
    latest: true, // only take latest
    process({ getState, action }, dispatch, done) {
      axios.get(REACT_APP_BASE_URL + '/todos')
        .then(resp => resp.data)
        .then(todos => dispatch({ type: FETCH_TODO_SUCCESS,
                                  payload: todos }))
        .catch(err => {
               console.error(err); // log since could be render err
               dispatch({ type: FETCH_TODO_FAILED, payload: err,
                          error: true })
        })
        .then(() => done());
    }
  });

  const saveTodoLogic = createLogic({
    type: SAVE_TODO, // only apply this logic to this type
    cancelType: CANCEL_REQUEST, // cancel on this type
    latest: true, // only take latest
    process({ getState, action }, dispatch, done) {
      axios.post( REACT_APP_BASE_URL + '/todos',  { name : action.payload, isComplete : false }  )
        .then(resp => resp.data)
        .then(newTodo => dispatch({ type: TODO_ADD,
                                  payload: newTodo }))
        .catch(err => {
               console.error(err); // log since could be render err
               dispatch({ type: FAILED_REQUEST, payload: err,
                          error: true })
        })
        .then(() => done());
    }
  });
  
export default [
    fetchTodosLogic,
    saveTodoLogic
  ];