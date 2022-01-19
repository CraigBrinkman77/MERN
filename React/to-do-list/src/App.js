import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import Todos from './components/Todos';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
		const todoItem = {
			text: newTodo,
			complete: false
		}
    console.log(newTodo);
    setTodos([...todos, todoItem]);
    setNewTodo('');
  }

  const handleTodoDelete = (delInx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delInx;
    });
    setTodos(filteredTodos);
  }

	const handleToggle = (index) =>{
		const checkedTodos = todos.map((todo, i) =>{
			if (index === i){
				const updatedTodo = {...todo, complete: !todo.complete}
				return updatedTodo
			}
		})
		setTodos(checkedTodos)
	}


  return (
    <div>
      
			<NewTodoForm handleNewTodoSubmit={handleNewTodoSubmit} setNewTodo={setNewTodo} newTodo={newTodo} />

			<div className='d-flex-column m-2 justify-content-center text-center p-1 bg-info'>
      {
        todos.map((todo, i) => {
          return (
            <Todos 
						key={i}
						todo={todo}
						handleToggle={handleToggle}
						i={i}
						handleTodoDelete={handleTodoDelete}
						/>
          );
        })
      }
			</div>
    </div>
  );
}

export default App;
