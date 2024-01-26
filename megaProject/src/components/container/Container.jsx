import React from 'react';

function Container({children}) {
    return (
        <div className='w-full m-0 p-0 '>
            {children}
        </div>
    );
}

export default Container;