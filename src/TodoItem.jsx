// src/components/TodoItem.jsx
import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className="TodoItem">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
