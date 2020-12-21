import React, { useState } from 'react'
import './Search.css'

function Search({ items }) {
    // { items }

    const [input, setInput] = useState('')

    // const [items, setItems] = useState(['usman aslam', 'hannan aslam', 'bilal aslam', 'aslam', 'usman aslam', 'hannan aslam', 'bilal aslam', 'aslam'])

    return (
        <div>
            <input
                placeholder='Search'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                    }}
                className="search__input"/>

            <ul className='p'>
                {items.filter((item) => {return item.firstlink.toLowerCase().includes(input.toLowerCase())}).map((item) => {
                    return <li ><a href="#">{item.firstlink}</a> + {item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Search
