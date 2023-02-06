import React from 'react';
import PropTypes from 'prop-types';
import Todolist from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todolist = [
        {
            id: 1,
            title: 'Ăn'
        },
        {
            id: 2,
            title: 'Code'
        },
        {
            id: 3,
            title: 'Ngủ'
        },
    ]
    return (
        <div>
            <h2>Todo List</h2>
            <Todolist todoList={todolist} />
        </div>
    );
}

export default TodoFeature;