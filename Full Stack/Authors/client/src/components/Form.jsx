import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    const {name} = props
    const [name, setName] = useState(name)

    const createAuthor = (e) =>{
        e.prevent.default;
        axios.create('http://localhost:8000/api/author/create', {name})
    }

    return (
        <form onSubmit={createAuthor}>
            <label>Name:</label>
            <input type="text" valeonChange={e=>setName(e.target.value)}/>
        </form>
    )
}

export default Form
