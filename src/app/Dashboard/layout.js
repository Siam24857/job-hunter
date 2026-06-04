import React from 'react';
import { Dashboradlayout } from '../component/DFashboradlayout';

const Dashbord = ({ children }) => {
    return (
        <div className='flex min-h-screen pt-20 gap-4'>
            <Dashboradlayout></Dashboradlayout>
           <div className='flex-1'>{children}</div>
        </div>
    );
};

export default Dashbord;