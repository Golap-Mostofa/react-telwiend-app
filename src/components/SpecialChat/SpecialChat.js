import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChat = () => {
    const [phone,setphone] = useState([])
    useEffect(()=>{
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const lodeddata = data.data.data
            const phonsdata = lodeddata.map(phone => {
                const parst = phone.slug.split('-')
                const ph={
                    name:parst[0],
                    value:+parst[1]
                
                };
               return ph
            })
            setphone(phonsdata)
            console.log(phonsdata);
        })
    },[])

    return (
        <BarChart width={850} height={400} data={phone}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    );
};

export default SpecialChat;