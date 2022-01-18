import React, {useState} from 'react'

const Tabs = (props) => {
    const tabs = props.info

    const [content, setContent]= useState('')

    const clickHandler = (tab) =>{
        setContent(tab.content)
    }

    return (
        <div>
            {
            tabs.map((tab, i)=>{
                console.log(tab)
                return (<button onClick={() => clickHandler(tab)} key= {i}> {tab.name} </button>)
            })
            }
            <div>
                {content}
            </div>
        </div>
        
    )
}

export default Tabs
