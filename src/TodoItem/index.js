import React from 'react';
import './styles.css'

function TodoItem(props) {

    return (
        <li className={`todoitem ${props.completed && 'todoitem--active'}`}>
            <span
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                onClick={props.onComplete}
            ></span>
            <p>{props.text}</p>
            <span
                className='icon icon-delete'
                onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };