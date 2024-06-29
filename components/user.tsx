"use client"

import React from 'react'


interface UserProps {
  username: string
  email: string
  location: string[] | string
  isAdmin: boolean
}

const User = ({
  username,
  email,
  location,
  isAdmin
}: UserProps) => {
  return (
    <div>
      <h1 className=' text-2xl font-semibold'>
        User Info
      </h1>
      <div className='h-[1px] w-[10rem] bg-black mb-3'></div>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Location: {location}</p>
      <p>Is Admin: {!isAdmin? 'Administrator' : 'Normal User'}</p>
    </div>
  )
}

export default User

// const User = ({
//   name,
//   age,
//   positions,

// }: {
//   name: string,
//   age: number,
//   positions: string[] | string,

// }) => {
//   return (
//     <main>

//       <h2>{name}</h2>
//       <p>{age}</p>
//       <p>{positions}</p>
//     </main>
//   )
// }

// export default User





// import React from 'react'

// interface UserProps { 
//   name: string,
//   age: number,
//   positions: string[] | string,
// }

// const user = ({ 
//   name,
//   age,
//   positions,
// }: UserProps) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age}</p>
//       <p>{positions}</p>
//     </div>
//   )
// }

// export default user