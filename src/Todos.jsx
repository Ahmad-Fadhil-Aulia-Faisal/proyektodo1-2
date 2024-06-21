// src/components/Todos.jsx
import React from 'react';
import TodoItem from './TodoItem';

function Todos({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="Todos">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default Todos;
