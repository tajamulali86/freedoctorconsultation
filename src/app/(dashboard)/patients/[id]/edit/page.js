"use client"
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useUser(id) {
  const { data, error } = useSWR(`http://localhost:8000/api/patients/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
const styler = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
function EditDetails(params) {
  const id = params.params.id;
  const { user, isLoading, isError } = useUser(id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = `http://localhost:8000/api/patients/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data updated successfully');
        // Perform any necessary actions or show a success message
      } else {
        console.log('Failed to update data');
        // Handle error case
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>Error occurred while fetching user data.</div>;

  return (
    <div className='container px-10 py-0 mx-auto mt-10 flex flex-wrap items-center h-full'>
      <form onSubmit={handleSubmit} className='bg-gray-100 rounded-lg p-8 flex flex-col w-1/3 mt-10 md:mt-0 mx-20'>
        <label className='leading-7 text-sm text-gray-600'>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className={`${styler}`}
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
            className={`${styler}`}
          />
        </label>

        <br />
        <button
          type='submit'
          className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >
          Update Data
        </button>
      </form>
    </div>
  );
}

export default EditDetails;
