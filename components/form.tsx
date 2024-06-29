"use client"
import { log } from 'console'
import React, { useRef, useState } from 'react'

type formData = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

const Form = () => {
  const [submitted, setSubmitted] = useState<formData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })


  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const confirmPassword = useRef<HTMLInputElement>(null)

 

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()

  
    try {
    
    const nameValue = name.current!.value
    const emailValue = email.current!.value
    const passwordValue = password.current!.value
    const confirmPasswordValue = confirmPassword.current!.value
  
      if (confirmPasswordValue !== passwordValue) {
        alert("Passwords do not match")
        return
      } 
      if (!nameValue ||!emailValue ||!passwordValue ||!confirmPasswordValue) {
        alert("Please fill in all fields")
        return
      }
       setSubmitted({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
          confirmPassword: confirmPasswordValue,
       })
      alert("User added successfully")
      console.log(submitted);
      
    } catch (error){ 
      console.log("error")
    }
  
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input ref={name} type="text" placeholder='Enter your name' />
        <br />
        <input ref={email} type="email" placeholder='Enter your email' />
        <br />
        <input ref={password} type="password" placeholder='Enter your password' required/>
        <br />
        <input ref={confirmPassword} type="password" placeholder='Confirm your password' required />
        <br />
        <button type='submit'>Submit</button>

        <section>
          <h1>Submitted Data</h1>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
          <p>Confirm Password: {submitted.confirmPassword}</p>
        </section>
      </form>
    </>
  )
}

export default Form