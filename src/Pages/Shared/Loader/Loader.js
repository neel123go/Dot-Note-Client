import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <HashLoader
                className='mx-auto'
                color="#EEB462"
                size={100}
                speedMultiplier={1.5}
            />
        </div>
    );
};

export default Loader;