import React, { useState, useEffect } from 'react' ;
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';


const Edit = () => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.error(err));
    },[]);

    const onSubmitHandler = () =>{
        axios.put(`http://localhost:8000/api/product/update/${id}`, {title, price, description})
            .then(res => console.log(res.data))
            .catch(err => console.error(err))

        history.push('/')
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

export default Edit
