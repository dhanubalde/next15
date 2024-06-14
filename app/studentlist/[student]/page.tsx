"use client";
import Link from 'next/link';
import React from 'react'


const StudentDetails = ({
  params }: {
    params: { student: string }
  }) => {


  return (
    <div>
      <h1>Student Details</h1>
      <p>Hello {params.student}</p>
      <button>
        <Link href='/studentlist'>back ↪️</Link>
      </button>
    </div>
  )
}

export default StudentDetails