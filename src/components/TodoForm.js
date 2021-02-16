import {connect} from 'react-redux'
import {updateCurrentTodo, saveTodo} from '../reducers/todo'
import React, {Component} from 'react'


class TodoForm extends Component {

      render() {
        const {currentTodo, updateCurrentTodo, saveTodo} = this.props;
        const handleCurrentTodoChange = (evt) => updateCurrentTodo(evt.target.value);
        const handleSaveTodo = (evt) => saveTodo(this.props.currentTodo);

        return (   
            <form>
                <label> New Todo </label>
                <input id="currentTodo" type="text" value={currentTodo} onChange={handleCurrentTodoChange}/>
                <input type='button' value="add" onClick={handleSaveTodo} />
            </form> 
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrentTodo, saveTodo}
)(TodoForm);