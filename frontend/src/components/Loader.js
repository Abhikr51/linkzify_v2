import React from 'react'

const Loader = ({size = 20,color="#ee0979"}) => {
    return (
        <div style={{height : size + 5 , width : size + 5}} className="loader">
            <div style={{
                height : size , 
                width : size,
                border: `${size / 10}px solid ${color}`,
                borderColor: `${color} transparent ${color} transparent`
            }} className='loader-after' ></div>
        </div>
    )
}

export default Loader