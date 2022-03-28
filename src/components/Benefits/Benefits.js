import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefits = (props) => {
    return (
        <p className='flex items-center'><CheckCircleIcon className='w-6 h-6 mr-2 text-green-600'></CheckCircleIcon>
               {props.benefit}
      </p>
    );
};

export default Benefits;