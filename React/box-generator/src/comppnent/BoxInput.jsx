import React, {useState} from 'react'
import CreateBox from './CreateBox'

const BoxInput = () => {
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [boxes, setBoxes] = useState([])

    const makeBox = (e) => {
        e.preventDefault();
        let newBox = {
            color: color,
            size: size + 'px'
        }
        setBoxes([...boxes, newBox])
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={makeBox}>
                <label>Color:</label>
                <input type="text" onChange={e => {setColor(e.target.value)}} />
                <label>Size:</label>
                <input type="text" onChange={e => {setSize(e.target.value)}} />
                <input type="submit" /> 
                </form>
            </div>
            <div >
                <CreateBox boxes={boxes} />
            </div>
        </div>
    )
}

export default BoxInput
