import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Starships = () => {
    const [starship, setStarship] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res=>{
                console.log(res.data);
                setStarship(res.data);
            })
            .catch(err=>{
                setStarship(null)
            })
    }, [id])
    return (
        <div>
            {
                starship ?
                <div className='container m-4'>
                    <h1>Name: {starship.name} </h1>
                    <h2>Crew: {starship.crew}</h2>
                    <h2>Length: {starship.length}</h2>
                </div>
                :
                <h1>Not Available</h1>
            }
        </div>
    )
}

export default Starships
