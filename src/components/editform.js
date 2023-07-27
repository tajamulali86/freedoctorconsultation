
// "use client"
// import { useState, useEffect } from 'react';
// import useSWR from 'swr';
// import Spinner from './spinner';

// const fetcher = (...args) => fetch(...args).then(res => res.json());

// function useUser(id,role) {
//   const { data, error } = useSWR(`http://localhost:8000/api/${role}/${id}`, fetcher);
//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }
// const styler = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
// function EditDetails({params, role}) {
//   const id = params.params.id;
//   const { user, isLoading, isError } = useUser(id,role);
//   const [formData, setFormData] = useState({
//     name: '',
//     profileimg: '',
//     email: '',
//     phone: '',
//     degree: '',
//     experiance: ''
//   });
// role==="doctors"?
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name,
//         profileimg: user.profileimg,
//         email: user.email,
//         phone: user.phone,
//     degree: user.degree,
//     experiance: user.experiance
//       });
//     }
//   }, [user])
//   : 
//    useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name,
//         email: user.email,
//         profileimg: user.profileimg,
//     //     phone: user.phone,
//     // degree: user.degree,
//     // experiance: user.experiance
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     if (e.target.name === 'img') {
//       setFormData({
//         ...formData,
//         profileimg: e.target.files[0],

//       });
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };
   

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const url = `http://localhost:8000/api/${role}/${id}`;
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       // formDataToSend.append('phone', formData.phone);
//       // formDataToSend.append('degree', formData.degree);
//       // formDataToSend.append('experiance', formData.experiance);
//       formDataToSend.append('img', formData.profileimg);
      
//       const response = await fetch(url, {
//         method: 'PUT',
//         body: formDataToSend,
//       });
      
   

//       if (response.ok) {
//         alert('Data updated successfully');
//         // Perform any necessary actions or show a success message
//       } else {
//         alert('Failed to update data');
//         // Handle error case
//       }
//     } catch (error) {
//      alert('Error:', error);
//     }
//   };

//   if (isLoading) return <div><Spinner/></div>;
//   if (isError) return <div>Error occurred while fetching user data.</div>;

//   return (
//     <div className='container px-10 py-0 mx-auto mt-10 flex flex-wrap items-center h-full'>
//       <form onSubmit={handleSubmit} className='bg-gray-100 rounded-lg p-8 flex flex-col w-1/3 mt-10 md:mt-0 mx-20'>

//       <img
//                         src={`http://localhost:8000/storage/${formData.profileimg}`}
//                         width={100}
//                         height={100}
//                         alt='profile' />
//         <label className='leading-7 text-sm text-gray-600'>
//           Name:
//           <input
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleInputChange}
//             className={`${styler}`}
//           />
//         </label>
//         <br />

//         <label className='leading-7 text-sm text-gray-600'>
//           Email:
//           <input
//             type='text'
//             name='email'
//             value={formData.email}
//             onChange={handleInputChange}
//             className={`${styler}`}
//           />
//         </label>

//         <label className='leading-7 text-sm text-gray-600'>
//           Profile image
//           <input
//             type='file'
//             name='img'
//             // value={formData.profileimg}
//             onChange={handleInputChange}
//             className={`${styler}`}
//           />
//         </label>

//         <br />
        
//          {role==="doctors"? <label className='leading-7 text-sm text-gray-600'>
//             phone:
//             <input
//               type='text'
//               name='phone'
//               value={formData.phone}
//               onChange={handleInputChange}
//               className={`${styler}  `}
//             />
//           </label>:'' }
//         <br />
        
//         {role==="doctors"? <label className='leading-7 text-sm text-gray-600'>
//             degree:
//             <input
//               type='text'
//               name='degree'
//               value={formData.degree}
//               onChange={handleInputChange}
//               className={`${styler} `}
//             />
//           </label>:""}


//         <br />
        
//         {role==="doctors"?   <label className='leading-7 text-sm text-gray-600'>
//             experiance:
//             <input
//               type='text'
//               name='experiance'
//               value={formData.experiance}
//               onChange={handleInputChange}
//               className={`${styler} `}
//             />
//           </label>:""}
//            <br />

//         <button
//           type='submit'
//           className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
//         >
//           Update Data
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditDetails;




"use client"
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Spinner from './spinner';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useUser(id, role) {
  const { data, error } = useSWR(`http://localhost:8000/api/${role}/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
const styler = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
function EditDetails({ params, role }) {
  const id = params.params.id;
  const { user, isLoading, isError } = useUser(id, role);
  const [formData, setFormData] = useState({
    name: '',
    profileimg: '',
    email: '',
    phone: '',
    degree: '',
    experiance: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        profileimg: user.profileimg,
        email: user.email,
        phone: user.phone,
        degree: user.degree,
        experiance: user.experiance
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    if (e.target.name === 'img') {
      setFormData({
        ...formData,
        profileimg: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8000/api/${role}/${id}`;
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('degree', formData.degree);
      formDataToSend.append('experiance', formData.experiance);
      formDataToSend.append('img', formData.profileimg);

      const response = await fetch(url, {
        method: 'PUT',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
         
        }
      });

      if (response.ok) {
        alert('Data updated successfully');
      } else {
        alert('Failed to update data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) return <div><Spinner /></div>;
  if (isError) return <div>Error occurred while fetching user data.</div>;

  return (
    <div className='container px-10 py-0 mx-auto mt-10 flex flex-wrap items-center h-full'>
      <form onSubmit={handleSubmit} className='bg-gray-100 rounded-lg p-8 flex flex-col w-1/3 mt-10 md:mt-0 mx-20'>
        <img
          src={`http://localhost:8000/storage/${formData.profileimg}`}
          width={100}
          height={100}
          alt='profile'
        />
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

        <label className='leading-7 text-sm text-gray-600'>
          Profile image
          <input
            type='file'
            name='img'
            onChange={handleInputChange}
            className={`${styler}`}
          />
        </label>

        <br />

        {role === "doctors" &&  <>
          <label className='leading-7 text-sm text-gray-600'>
            phone:
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className={`${styler}  `}
            />
          </label>
        <br />

      
          <label className='leading-7 text-sm text-gray-600'>
            degree:
            <input
              type='text'
              name='degree'
              value={formData.degree}
              onChange={handleInputChange}
              className={`${styler} `}
            />
          </label> 

        <br />

       
          <label className='leading-7 text-sm text-gray-600'>
            experiance:
            <input
              type='text'
              name='experiance'
              value={formData.experiance}
              onChange={handleInputChange}
              className={`${styler} `}
            />
          </label> 
        <br /></>
  }
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
