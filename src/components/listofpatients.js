
// "use client"

// import { useEffect, useState } from 'react';
// import Delete from './deletemodal';
// import Editinfo from './editmodal';
// import Link from 'next/link';

// function PatientList() {
//     const [data, setData] = useState(null);
//     const [patients, setPatients] = useState([]);

//     // Function to handle the deletion of a patient
   
//       useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const response = await fetch(`http://localhost:8000/api/patient`);
//               const responseData = await response.json();
//         setData(responseData);
//         console.log(data);
//       } catch (error) {
//         console.error('Error:', error);
//     }
// };

//     fetchData();
// }, []);

// if (!data) {
//     return <div>Loading...</div>;
// }
// const handleDelete = (id) => {
//     // Filter out the deleted patient from the patients array
//     const updatedPatients = data.filter((item) => item.id !== id);
//     setData(updatedPatients);
    
//   };
//   // Render the data
//   return (
//     <div>
      
//       <div className="relative overflow-x-auto">
//   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//       <tr>
//         <th scope="col" className="px-6 py-3">
//           Product name
//         </th>
//         <th scope="col" className="px-6 py-3">
//           Color
//         </th>
//         <th scope="col" className="px-6 py-3">
//           Category
//         </th>
//         <th>
//             Status
//         </th>
//       </tr>
//     </thead>
//     <tbody>{ 
//     data.map((item)=>(
        
//       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id} onDelete={item.className="hidden"}>
//         <th
//           scope="row"
//           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//         >
//           {item.id}
//         </th>
//         <td className="px-6 py-4">{item.name}</td>
//         <td className="px-6 py-4">{item.email}</td>
//         <td className="px-6 py-4">
            
//            <Link href={`patient/${item.id}`}> <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
//   <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//      Consult 
//   </span>
// </button></Link>|| 
// {/* <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//   <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//       Edit
//   </span>
// </button> */}
// <Editinfo/>
//  || 
// {/* <button      className= "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
//   <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//       Delete
//   </span>
// </button> */}
// <Delete name={item.name} id={item.id} onDelete={handleDelete} /></td>
//       </tr> ))}
//     </tbody>
//   </table>
// </div>



//     </div>
//   );
// }

// export default PatientList;


// export const getStaticProps=async ()=>{
//     const res= await fetch("http://localhost:8000/api/patient");
//     const data= await res.json()
    
//     return{
//         props:{
//             data,
//         }
//     }
// }

// const PatientList=({data})=>{
//     return(
//         <>
//         {data.map((item)=>{
        
//         <div key={item.id}>
//             <h3>{item.name}</h3>
//             <h3>{item.email}</h3>
//         </div>
       
//     })}
//      </>
//     )
// }

// export default PatientList


  const PatientList = ({ data }) => {
    return (
      <>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.email}</h3>
          </div>
        ))}
      </>
    );
  };
  
  export default PatientList;