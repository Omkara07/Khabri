import React from 'react'
import spinner from'./spinner.gif';

export default function Loading() {
    return (
      <div className='text-center my-3'>
        <img src={spinner} style={{height:"50px", width:"50px"}} alt="hehe" />
      </div>
    )
}

