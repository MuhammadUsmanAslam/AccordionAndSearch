import React, {useState} from 'react'
import Accordion from './Accordion/Accordion';
import './Sidebar.css'

function Sidebar() {

    // This is for accordion's open/close state
    const [active, setActive] = useState('');

    // let titles = ['title1', 'title2' ]
    let titles = [{title: 'title1', links: [{firstlink: 'im 1st in the Usman list of 1', name:"name1"}, {firstlink: 'im 2nd in the list of 1', name:"name1"}, {firstlink: 'im 3rd in the list of 1', name:"name1"}, {firstlink: 'im 4th in the list of 1', name:"name1"}]},
                    {title: 'title2', links: [{firstlink: 'im 1st in the list of 2', name:"name2"}, {firstlink: 'im 2nd in the list of 2', name:"name2"}, {firstlink: 'im 3rd in the list of 2', name:"name2"}, {firstlink: 'im 4thd in the list of 2', name:"name2"}]},
                    {title: 'title3', links: [{firstlink: 'im 1st in the list Usman of 3', name:"name3"}, {firstlink: 'im 2nd in the list of 3', name:"name3"}, {firstlink: 'im 3rd in the list of 3', name:"name3"}, {firstlink: 'im 4th in the list of 3', name:"name3"}]},
                    {title: 'title4', links: [{firstlink: 'im 1st in the list Usman of 4', name:"name4"}, {firstlink: 'im 2nd in the list of 4', name:"name3"}, {firstlink: 'im 3rd in the list of 3', name:"name4"}, {firstlink: 'im 4th in the list of 4', name:"name3"}]},
                    {title: 'title5', links: [{firstlink: 'im 1st in the list Usman of 5', name:"name5"}, {firstlink: 'im 2nd in the list of 5', name:"name3"}, {firstlink: 'im 3rd in the list of 3', name:"name5"}, {firstlink: 'im 4th in the list of 5', name:"name3"}]},
                    {title: 'title6', links: [{firstlink: 'im 1st in the list Usman of 6', name:"name6"}, {firstlink: 'im 2nd in the list of 6', name:"name3"}, {firstlink: 'im 3rd in the list of 3', name:"name6"}, {firstlink: 'im 4th in the list of 6', name:"name3"}]}
                ]

    return (
        <div className='sidebar'>
            <h1>Im sidebar</h1>
            {titles.map((title) => {
                return <Accordion title={title} active={active} setActive={setActive} />
                })}
        </div>
    )
}

export default Sidebar