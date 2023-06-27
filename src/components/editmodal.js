"use client"
import { useState } from "react";


const Editinfo = ({name}) => {

    const [showModal, setShowModal] = useState(false);
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
        <>
         <button  onClick={()=>setShowModal(true)}    className= "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Edit
  </span>
</button>
{showModal && (
         <div
         id="popup-modal"
         tabIndex={-1}
         className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-25  bg-blur-sm  flex justify-center items-center"
     >
         <div className="relative w-full max-w-md max-h-full">
             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                 <button
                     type="button"
                     className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      onClick={()=>setShowModal(false)}  
                 >
                     <svg
                         aria-hidden="true"
                         className="w-5 h-5"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                             fillRule="evenodd"
                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                             clipRule="evenodd"
                         />
                     </svg>
                     <span className="sr-only">Close modal</span>
                 </button>
                 <div className="p-6 text-center">
                     <svg
                         aria-hidden="true"
                         className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth={2}
                             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                         />
                     </svg>
                     <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Edit {name}
                     </h3>
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
                     <button
                         onClick={()=>setShowModal(false)}  
                         type="button"
                         className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                     >
                         update?
                     </button>
                     <button
                        onClick={()=>setShowModal(false)}  
                         type="button"
                         className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                     >
                         No, cancel
                     </button>
                 </div>
             </div>
         </div>
     </div>
      )}
          
        </>

    )
}

export default Editinfo