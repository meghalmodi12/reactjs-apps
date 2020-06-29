import React from 'react';

const Items = (props) => {
    const todos = props.todoItems;
    const todoItems = todos.map(todo => {
        return (
            <div className="todoItem" key={todo.id}>
                <label>{todo.todo}</label>
                <button onClick={() => {props.deleteItem(todo.id)}}>Delete</button>
            </div>
        )
    });

    return (
        <div className="todoList">
            {todoItems}
        </div>
    )
};

export default Items;