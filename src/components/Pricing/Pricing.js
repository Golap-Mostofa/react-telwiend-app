import React from 'react';
import Pricingoption from '../Pricingoption/Pricingoption';

const Pricing = () => {
    const pricingoption =[
        {id:1, name: 'Free',price: 0, benefits:[
            'life time free',
            'anlimeted time free',
            'anlimeted time free',
            'fantasticc deasl',
            'carzy deals'
        ]},
        {id:2, name: 'Regular',price: 9.99,benefits:[
            'life time free',
            'anlimeted time free',
            'anlimeted time free',
            'fantasticc deasl',
            'carzy deals'
        ]},
        {id:3, name: 'Premium',price: 19.99,benefits:[
            'life time free',
            'anlimeted time free',
            'anlimeted time free',
            'fantasticc deasl',
            'carzy deals'
        ]}
    ]

    return (
        <div className='bg-indigo-300 p-4'>
            <h1 className='text-6xl text-white font-mono'>Best deals of the twon</h1>
           
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
            {
            pricingoption.map(option=><Pricingoption
            key={option.id}
            option={option}
            ></Pricingoption>)
            }
            </div>
        </div>
    );
};

export default Pricing;