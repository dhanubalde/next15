
"use client"

import { useState } from 'react'

const AddUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async () => { 
    let res = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password })
    });
    res = await res.json()

    if (res.ok) {
        alert("Users added successfully")
      } else {
        alert('Error creating users')
      }
    }
  

  return (
    <div className='p-10'>
      <h1>Add User List</h1>
      <br />
      <input
        className='border border-black mt-2 font-light text-[12px] rounded-sm'
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        placeholder='Enter your name'
      />
      <br />
      <input
            className='border border-black mt-2 font-light text-[12px] rounded-sm'
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        placeholder='Enter your email'
      />
      <br />
      <input
            className='border border-black mt-2 font-light text-[12px] rounded-sm'
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
        placeholder='Enter your Password'
      />
      <br />
      <button
        className=' bg-cyan-500 text-white border px-6 py-1 rounded-lg  m-4' onClick={submitHandler}>Submit</button>
    </div>
  )

}
export default AddUser


