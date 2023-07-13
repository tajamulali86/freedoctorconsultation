"use client"
import { useState } from 'react';
// const isDoctor = true;
const styler = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
function EditDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    phone: '',
    degree: '',
    experiance: ''

  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8000/api/${formData.role}/${params}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data added successfully
        // Perform any necessary actions or show a success message
        console.log('Data added successfully');
        setFormData({
          name: '',
          email: '',
          role: '',
          phone: '',
          degree: '',
          experiance: ''

        });
      } else {
        // Handle error case
        console.log('Failed to add data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container px-10 py-0 mx-auto mt-10 flex flex-wrap items-center  h-full'>
      <form
        onSubmit={handleSubmit}
        className='bg-gray-100 rounded-lg p-8 flex flex-col w-1/3 mt-10 md:mt-0 mx-20'
      >
        <label className='leading-7 text-sm text-gray-600'>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className={`${styler} `}
          />
        </label>
        <br />

        <label className='leading-7 text-sm text-gray-600'>
          Email:
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className={`${styler} `}
          />
        </label>

        <br />
        {formData.role === 'doctors' ?
          <label className='leading-7 text-sm text-gray-600'>
            phone:
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className={`${styler}  `}
            />
          </label> : ""
        }

        <br />
        {formData.role === 'doctors' ?
          <label className='leading-7 text-sm text-gray-600'>
            degree:
            <input
              type='text'
              name='degree'
              value={formData.degree}
              onChange={handleInputChange}
              className={`${styler} `}
            />
          </label> :
          ""
        }

        <br />
        {formData.role === 'doctors' ?
          <label className='leading-7 text-sm text-gray-600'>
            experiance:
            <input
              type='text'
              name='experiance'
              value={formData.experiance}
              onChange={handleInputChange}
              className={`${styler} `}
            />
          </label> : ""
        }
        <br />
        <label className='leading-7 text-sm text-gray-600'>Doctor or Patient</label>
        <div>
          <input
            type='radio'
            id='doctors'
            name='role'
            value='doctors'
            checked={formData.role === 'doctors'}
            onChange={handleInputChange}
            className='w-1/2 bg-white rounded border border-gray-300  focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='doctors'>Doctor</label>
          <br />
          <input
            type='radio'
            id='patients'
            name='role'
            value='patients'
            checked={formData.role === 'patients'}
            onChange={handleInputChange}
            className='w-1/2 bg-white rounded border border-gray-300  focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='patients'>Patient</label>
          <br />
          <br />
        </div>
        <button
          type='submit'
          className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >
          Add Data
        </button>
      </form>
    </div>
  );
}

export default EditDetails;