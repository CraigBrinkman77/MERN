import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Planets = () => {
    const [planet, setPlanet] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res=>{
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err=>{
                setPlanet(null)
            })
    }, [id])
    return (
        <div>
            {
                planet ?
                <div className='container m-4'>
                    <h1>Name: {planet.name} </h1>
                    <h2>Climate: {planet.climate}</h2>
                    <h2>Gravity: {planet.gravity}</h2>
                    <h2>Terrain: {planet.terrain}</h2>
                    

                </div>
                :
                <h1>Not Available</h1>
            }
        </div>
    )
}

export default Planets
