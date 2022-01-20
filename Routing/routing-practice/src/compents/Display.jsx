import React from 'react';
import { useParams } from 'react-router-dom';

const Display = () => {

    const {word, textcolor, bg} = useParams()

    const style = {
        color : textcolor? textcolor : 'blue',
        backgroundColor: bg? bg : 'brown'
    }
    return (
        <div>
            
            <h1 style={style}>
                {
                isNaN(word)? `The word is: ${word}`: `The number is 😘: ${word}`  
                }
            </h1>
            
        </div>
    )
};

export default Display;