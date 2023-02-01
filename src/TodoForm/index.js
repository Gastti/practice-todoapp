import React from 'react';
import { TodoContext } from '../TodoContext/index';
import './styles.css';

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState();
    const onCancel = () => {
        setOpenModal(prevState => !prevState);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(prevState => !prevState)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <form
            className='todo-form'
            onSubmit={onSubmit}>
            <label>Nueva Tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='ej. Organizar mi ropa.' />
            <div>
                <button
                    type='button'
                    className='todo-btn todo-btn--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='todo-btn todo-btn--add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };