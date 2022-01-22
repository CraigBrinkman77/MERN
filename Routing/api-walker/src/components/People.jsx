import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const People = () => {
    const [person, setPerson] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res=>{
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err=>{
                setPerson(null)
            })
    }, [id])

    return (
        <div>
            {
                person ?
                <div className='container m-4'>
                    <h1>Name: {person.name} </h1>
                    <h2>eye-color: {person.eye_color}</h2>
                    <h2>Hair: {person.hair_color}</h2>
                    <h2>Mass: {person.mass}</h2>

                </div>
                :
                <h1>Not Available</h1>
            }
        </div>
    )
}

export default People

