import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';



const Home = () => {
    const [products, setProducts] = useState(null);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, [refresh]);

        const refreshList = () => {
            setRefresh(!refresh)
        }
        return (
            <div>
                <Form refreshList = {refreshList}/>
                <hr />
                {
                    products ?
                        products.map((product, i) => 
                            <Link to={`/product/${product._id}`} key={i} >{product.title} </Link>
                        )
                        :
                        <h1> No Products</h1>
                }
            </div>
        )
}

export default Home;
