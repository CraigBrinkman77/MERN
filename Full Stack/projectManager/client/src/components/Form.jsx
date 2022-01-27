import React, { useState } from 'react' ;
import axios from 'axios';

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
        setDescription("")
        setPrice(0)
        setTitle("")
        props.refreshList()
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title: </label>
                <input type = "text" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
            <input type="submit" />
        </form>
    )
}

export default Form
