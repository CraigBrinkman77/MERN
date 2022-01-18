import React from 'react'

const CreateBox= ({boxes}) => {

    return (
        <div className='d-flex'>
            {
                boxes.map((box, i)=>{
                    let style= {backgroundColor: box.color, height: box.size, width: box.size}
                    return <div className="m-3" key={i} style={style}></div>
                })
            }
        </div>
    )
}

export default CreateBox
