"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const layout = ({
  children
}: {
  children: React.ReactNode
}
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathName = usePathname();

  return (
    <div>
       <ul className="login-menu">
        <li>
          <Link href="/login">Login Main Routes</Link>
        </li>
        {pathName !== "/login/loginadmin" ? (
          <li className=' underline'>
            <Link href="/login/loginuser">Login Regular User</Link>
          </li>
        ): (
          <li className=' underline'>
            <Link href="/login/loginadmin">Login Admin</Link>
          </li>  
        )}
        {/* <li className=' underline'>
          <Link href="/login/loginuser">Login Regular User</Link>
        </li>
        <li className=' underline'>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li> */}
      </ul>
      {children}
    </div>
  )
}

export default layout