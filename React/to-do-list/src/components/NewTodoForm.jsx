import React from 'react'

const NewTodoForm = (props) => {
    return (
        <div className='d-flex justify-content-center text-center p-2 bg-primary'>
            <form onSubmit={(event) => {
                props.handleNewTodoSubmit(event);
            }}>
                <input className='m-2' type="text" value={props.newTodo} onChange={(event) => {
                    props.setNewTodo(event.target.value);
                }} />
                <div>
                    <button className='btn btn-success m-2'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodoForm
