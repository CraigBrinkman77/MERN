import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useHistory, Link } from 'react-router-dom'



const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[]);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        product ?
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/edit/"+product._id}>Edit</Link>
            <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
        </div>
            :
            <p>No Product</p>

    )
}

export default OneProduct;