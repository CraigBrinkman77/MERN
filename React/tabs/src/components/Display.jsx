import React from 'react'
import Tabs from './Tabs'

const info = [
    {name: "tab1", content: "tab1 text"},
    {name: "tab2", content: "tab2 text"},
    {name: "tab3", content: "tab3 text"}
]
const Display = () => {
    return (
        <Tabs info = {info} />
    )
}

export default Display
