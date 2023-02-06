import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todoList: PropTypes.array,
};

Todolist.defaulProps = {
    todoList: [],
};

function Todolist({ todoList }) {

    return (
        <div>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;