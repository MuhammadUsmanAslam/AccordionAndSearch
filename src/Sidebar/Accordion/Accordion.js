import React, { useState } from 'react'
import Search from '../Search/Search'
import './Accordion.css'

export default function Accordion({title, active, setActive}) {

    const [isOpen, setIsOpen] = useState(false);

    // const [items, setItems] = useState(['usman aslam', 'hannan aslam', 'bilal aslam', 'aslam', 'usman aslam', 'hannan aslam', 'bilal aslam', 'aslam'])

    return (
        <div className='accordion'>
            <div className='accordion__heading' 
                onClick={()=> setActive((active === title.title) ? setIsOpen(!isOpen) + title.title : title.title )}>
                    <h3>{title.title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                        className={(active === title.title) ? "accordion__headingSVG--open" +  " accordion__headingSVG" : " accordion__headingSVG"} 
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
            </div>
            <div className={(active === title.title) ? "accordion__body--active" : "" + " accordion__body"}>
                <Search items={title.links} />
            </div>
        </div>
    )
}