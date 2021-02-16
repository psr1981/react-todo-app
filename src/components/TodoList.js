import {connect} from 'react-redux'
import React, {Component} from 'react'
import {fetchTodos} from '../reducers/todo'


const TodoItem = ({id,name,isComplete}) => (
    <li>
      <input type="checkbox" defaultChecked={isComplete} />
      {name}
    </li>
  )

class TodoList extends Component {
    componentDidMount() {
      this.props.fetchTodos()
    }
  
    render() {
        return ( 
            <div className="Todo-list">
                {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} /> )}
            </div> 
        )
    }
}

export default connect(
    (state) => ({todos : state.todos}),
    {fetchTodos}
)(TodoList)