"use client"

import Delete from './deletemodal';
import Editinfo from './editmodal';
import Link from 'next/link';
import { unstable_serialize } from 'swr'
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useUser({role}) {
  const { data, error, isLoading } = useSWR(`http://localhost:8000/api/${role}`, fetcher)

  return {
    user: data,
    isLoading,
    isError: error
  }
}


function PatientList({role}) {
  const handleDelete = (id) => {
    // Filter out the deleted patient from the patients array
    const updatedPatients = data.filter((item) => item.id !== id);
    setData(updatedPatients);
    const [data, setData] = useState(null);
  }
  const { user, isLoading, isError } = useUser({role})

  // const [patients, setPatients] = useState([]);

  if (isLoading) return (<div>

    <div className="relative overflow-x-auto  ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
               name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
        

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                id
              </th>
              <td className="px-6 py-4">Name</td>
              <td className="px-6 py-4">Email</td>
              <td className="px-6 py-4">

              
              
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                id
              </th>
              <td className="px-6 py-4">Name</td>
              <td className="px-6 py-4">Email</td>
              <td className="px-6 py-4">

              
              
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                id
              </th>
              <td className="px-6 py-4">Name</td>
              <td className="px-6 py-4">Email</td>
              <td className="px-6 py-4">

              
              
                </td>
            </tr>
        </tbody>
      </table>
    </div>



  </div>);
  if (isError) return ("errr");
  // return <img src={user.avatar} />

  return (
    <div>

      <div className="container mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                 ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              {role=="doctors"?<>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Degree
              </th>
              <th scope="col" className="px-6 py-3">
                Experiance
              </th>
             </>
                :''}
             
              <th>
                Status
              </th>
            </tr>
          </thead>
          <tbody>{
            user.map((item) => (

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id} onDelete={item.className = "hidden"}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                {role=="doctors"?<>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.degree}</td>
                <td className="px-6 py-4">{item.experiance}</td></>
                :''}
                <td className="py-4">

                  <Link href={`${role}/${item.id}`}> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {role=="patients"?"Consult":"More information"}
                    </span>
                  </button></Link>
                  {/* || */}
                  {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Edit
                    </span>
                  </button> */}
                  {/* <Editinfo/> */}
                  {/* || */}
                  {/* <button      className= "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Delete
  </span>
</button> */}
                  {/* <Delete name={item.name} id={item.id} onDelete={handleDelete} /> */}
                  </td>
              </tr>))}
          </tbody>
        </table>
      </div>



    </div>
  );
}

export default PatientList;

