"use client"

import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  return (
    <div className=' p-5'>
      <h1 >Counter App</h1>
      <div className='flex flex-col space-y-3'>
      <button className='border p-2  rounded-lg' onClick={increment}>+</button>
      <button className='border p-2  rounded-lg' onClick={decrement}>-</button>
      <button className='border p-2  rounded-lg' onClick={reset}>reset</button>
        <h1 className=' text-6xl'>{count}</h1>
      </div>
    </div>
  )
}

export default Counter