"use client"

import { useState } from 'react';

function AddtoApi() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/patient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Data added successfully
        // Perform any necessary actions or show a success messeage
        console.log('Data added successfully');
      } else {
        // Handle error case
        console.log('Failed to add data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container px-10 py-0 mx-auto mt-10 flex flex-wrap items-center'>
      <form onSubmit={handleSubmit} className=" bg-gray-100 rounded-lg p-8 flex flex-col  w-1/3 mt-10 md:mt-0 mx-20">
        <label className='leading-7 text-sm text-gray-600'>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
        </label>
        <br />

        <label className='leading-7 text-sm text-gray-600'>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange}  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
        </label>
     
        <br />
        <button type="submit" className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add Data</button>
      </form>
    </div>
  );
}

export default AddtoApi;