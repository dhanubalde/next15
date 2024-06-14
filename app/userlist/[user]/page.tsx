import React from 'react'

const UserDetails = ({ params }: { params: {user: string} }) => {

  return (
    <div>
      UserDetails
      <h1>info About {params.user}</h1>
      <p>Hello I`m {params.user} </p>
    </div>
  )
}

export default UserDetails