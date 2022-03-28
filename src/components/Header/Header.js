import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Navber from '../Navber/Navber';

const Header = () => {
    const [open,setopen] = useState(false)

    const navbar = [
        {name:'Home',link:'/Home', id:1},
        {name:'shop',link:'/about', id:2},
        {name:'detels',link:'/Home', id:3},
        {name:'coupons',link:'/Home', id:4},
        {name:'contact',link:'/Home', id:5}
    ]

    return (
        <nav className='bg-indigo-300'>
            <div onClick={()=> setopen(!open)} className='w-6 h-6 md:hidden'>
            {open ? <XIcon></XIcon> :<MenuIcon></MenuIcon>}
            </div>
           <ul className={`md:flex justify-center bg-indigo-300 w-full absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-220px]'}`}>
           {
                navbar.map(header=><Navber 
                    key={header.id}
                    header={header}
                    ></Navber>)
            }
           </ul>
        </nav>
    );
};

export default Header;