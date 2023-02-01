import React from 'react';
import './styles.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button
            className='createtodo'
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton };