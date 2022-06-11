import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import pic from '../../img/website-development-process-1.jpg'

const Contact = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = async data => {
        reset()
        toast.success('You message has been send !!')


    }
    return (
<div class="hero min-h-screen bg-base-200 mt-10">

  <div class="hero-content flex-col lg:flex-row-reverse">
    <img className='w-1/2' src={pic} />
    <div className='md:w-[350px]'>
    <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
    <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs"
        {...register("email", {
            required: {
                value: true,
                message: 'Email is Required'
            },
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            }
        })}
    />
    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Your Message</span>
    </label>
    <textarea
        type="text"
        rows="50" cols="33"
        placeholder="Please Write You Message"
        className="input input-bordered w-full max-w-xs"
        {...register("Message", {
            required: {
                value: true,
                message: 'Message is Required'
            },
            minLength: {
                value: 6,
                message: 'Must be 6 characters or longer'
            }
        })}
    />
    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label>
</div>

<input className='btn w-full max-w-xs text-white btn-1' type="submit" value="Submit" />
</form>
    </div>
  </div>
</div>
    );
};

export default Contact;