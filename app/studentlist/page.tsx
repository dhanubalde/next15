import Link from 'next/link'
import React from 'react'

const Studentlist = () => {
  const users = ["Dan", "John", "Mary", "Rea", "Ted"] 


  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {users.map((user: string) => (
          <li key={ user}>
            <Link href={`/studentlist/${user}`}>{ user}</Link>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Studentlist