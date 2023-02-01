import React from 'react';

const styles = {
    ul: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <section>
            <ul style={styles.ul}>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };