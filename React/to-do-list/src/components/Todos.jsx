import React from 'react'


const Todos = (props) => {
    const todoClasses = ['bold', 'ml-2'];

    if (todo.complete) {
        todoClasses.push('line-through')
    }

    return (

        <div className='m-2'>
            <input checked={todo.complete} type='checkbox' onChange={(event) => { handleToggle(props.i) }} />
            <span className={todoClasses.join(' ')}>{todo.text}</span>
            <button className='btn btn-danger ml-3' onClick={(event) => { handleTodoDelete(props.i) }}>Delete</button>
        </div>
    )
}

export default Todos
