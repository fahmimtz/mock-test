import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodo } from '../Redux/actions/todoActions'

class Todo extends Component{

  componentDidMount(){
    this.props.fetchTodo()
  }

  render(){
    const todoItems = this.props.todo.map(todo => (
      <div key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{todo.completed}</p>
      </div>
    ));

  return (
    <div>
      <h1>todo</h1>
      {todoItems}
    </div>
  );
}
}

const mapStateToProps = state => ({
  todo:state.todo.items
})


export default connect(mapStateToProps,{fetchTodo})(Todo)