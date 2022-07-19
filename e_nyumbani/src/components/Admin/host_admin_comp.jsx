import React from 'react'
import { useRef } from 'react';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
const HostAdminInput = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors)
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} action="register" className='login-auth'>
            <h4>Enter details to login</h4>
            
            <label htmlFor="Email">Enter Location</label>
            <input className='input' type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <label htmlFor="phone">Enter Price</label>
            <input className='input' type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <label htmlFor="phone">Enter Description about the property</label>
            <input className='input' type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />

            <input className='btn' type="submit" />
            <Link to = '/host_admin'className="btn">Enter</Link>
        </form>
    </div>
  )
}

export default HostAdminInput