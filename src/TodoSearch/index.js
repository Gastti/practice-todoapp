import React from 'react';
import { TodoContext } from '../TodoContext';
import './styles.css'

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input
            className='todosearch'
            placeholder='Search your task'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };