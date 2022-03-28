import React from 'react';
const Navber = (props) => {
    const {name,link} = props.header
    return (
            <li className='mr-16 p-2'>

                <a className='font-bold hover:bg-green-600 p-2 rounded' href={link}>{name}</a>
                
            </li>
    );
};

export default Navber;