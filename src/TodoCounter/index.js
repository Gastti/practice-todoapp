import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            {
                !totalTodos
                    ? <h2>No tienes tareas pendientes.</h2>
                    : <h2>Haz completado {completedTodos} de {totalTodos} tareas.</h2>
            }
        </React.Fragment>
    )
}

export { TodoCounter };