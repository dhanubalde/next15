import Link from 'next/link'
import React from 'react'

const UserList = () => {
  return (
    <div>
      <h1>UserList </h1>
      <ul>
        <li>
          <Link href='/userlist/alex'>Alex</Link>
        </li>
        <li>
          <Link href='/userlist/rea'>Rea</Link>
        </li>
        <li>
          <Link href='/userlist/dan'>Dan</Link>
        </li>
        <li>
          <Link href='/userlist/ted'>Ted</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserList