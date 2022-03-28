
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const Pricingoption = (props) => {
    const { name, price,benefits } = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-1xl font-bold bg-indigo-300 py-2 rounded'>{name}</h2>
            <p><span className='text-5xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-left text-xl '>
                    Benefits:
                </h3>
                {
                    benefits.map(benefit=><Benefits benefit={benefit}></Benefits>)
                }
            </div>
            <button className='bg-green-500 flex w-full justify-center py-2 rounded mt-6 text-white hover:text-green-700 font-bold'>BY NOW
            <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default Pricingoption;