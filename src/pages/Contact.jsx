import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xrbzzdzn");  
  
  if (state.succeeded) {
      return <p className="text-center mt-[5rem] text-green-500 font-semibold">Thanks for reaching out! We will get back to you soon.</p>;
  }

  return (
<div>
<h1 className='mt-[7rem] mb-[3rem] underline text-4xl text-red-800 font-extrabold '>CONTACT US! </h1>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-blue-900 rounded-lg shadow-md">
      <label htmlFor="name" className="block  font-medium text-yellow-200 text-lg mr-[25rem]">
        Name:
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="block w-full p-2 border border-gray-500 rounded mt-1 bg-slate-300"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        className="text-red-500 text-sm mt-1"
      />
      
      <label htmlFor="email" className="mt-4 block  font-medium text-yellow-200 text-lg mr-[25rem]">
        Email:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="block w-full p-2 border border-gray-500 rounded mt-1 bg-slate-300"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="text-red-500 text-sm mt-1"
      />

<label htmlFor="phone" className="mt-4 block  font-medium text-yellow-200 text-lg mr-[20rem]">
        Phone Number:
      </label>
      <div className="flex mt-1">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          +91
        </span>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          className="block w-full p-2 border border-gray-300 rounded-r-md bg-slate-300"
        />
      </div>
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
        className="text-red-500 text-sm mt-1"
      />

      <label htmlFor="message" className="mt-4 block font-medium text-yellow-200 text-lg mr-[24rem]">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="block w-full p-2 border border-gray-300 rounded mt-1 bg-slate-300"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="text-red-500 text-sm mt-1"
      />

      <button type="submit" disabled={state.submitting} className="mt-4 bg-blue-500 text-yellow-200 p-2 rounded">
        Submit
      </button>
    </form>
    </div>
    
  );
}


