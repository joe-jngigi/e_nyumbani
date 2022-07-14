import React from 'react'
import { useState } from 'react'

import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import './host_css.css'
export const HostLogin = () =>{

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className='host-auth'>
        <form onSubmit={handleSubmit(onSubmit)} action="register" className='login-auth'>
            <h4>Enter details to login</h4>
            
            <label htmlFor="Email">Enter e-mail</label>
            <input className='input' type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <label htmlFor="phone">Enter Password</label>
            <input className='input' type="password" placeholder="Password" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

            <input className='btn' type="submit" />
          
        </form>
    </div>
  )
}

export const HostRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} action="register" className='login-auth'>
            <h4>Enter details to login</h4>
            <label htmlFor="Firstname">Enter first name</label>
            <input className='input' type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <label htmlFor="Lastname">Enter last name</label>
            <input className='input' type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            <label htmlFor="Email">Enter e-mail</label>
            <input className='input' type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <label htmlFor="phone">Enter phone number</label>
            <input className='input' type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

            <input {...register("Developer", { required: true })} type="radio" value="Yes" />
            <input {...register("Developer", { required: true })} type="radio" value="No" />

            <input className='btn' type="submit" />
          
        </form>
    </div>

  )
}
