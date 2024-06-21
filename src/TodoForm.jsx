// src/components/TodoForm.jsx
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        addTodo(newTodo);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                style={styles.input}
            />
            <button type="submit" style={styles.addButton}>Add Todo</button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        marginBottom: '24px',
    },
    input: {
        flex: '1',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px 0 0 4px',
        border: '1px solid #ccc',
    },
    addButton: {
        padding: '8px 16px',
        fontSize: '16px',
        borderRadius: '0 4px 4px 0',
        border: 'none',
        backgroundColor: '#28a745',
        color: 'white',
        cursor: 'pointer',
    },
};

export default TodoForm;
