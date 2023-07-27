"use client"
import Link from 'next/link';
import useSWR from "swr";
import Spinner from './spinner';
import { useState } from 'react';

const baseurl="http://localhost:1337"

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useUser({ role }) {
  const { data, error, isLoading } = useSWR(`${baseurl}/api/${role}?populate=*`, fetcher)

  return {
    user: data,
    isLoading,
    isError: error
  }
}

function Strapi({ role }) {

  const [page, setPage] = useState(1);
  const perPage = 10;

  const { user, isLoading, isError } = useUser({ role })

  if (isLoading) return (<Spinner />);

  if (isError) return ("errr");

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  console.log(user.data[3]);
  const displayedUsers = user.data.slice(startIndex, endIndex);

  return (
    <>
      <div className="container mx-auto ">
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
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
             
              {role == "doctors" && <>
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
                }

              <th>
                Status
              </th>
            </tr>
          </thead>
          <tbody>{
            
            displayedUsers .map((item) =>
            (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.attributes.id} onDelete={item.className = "hidden"}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.attributes.Name}</td>
                <td className="px-6 py-4">
                 {item.attributes.profilepic.data!=null ?
                    <a
                      href={`http://localhost:8000/storage/${item.profileimg}`}
                      target='_blank'
                    >
                      <img
                        src={`${baseurl}${item.attributes.profilepic.data.attributes.url}`
                             }
                        width={100}
                        height={100}
                        alt='profile' />
                    </a> :
                    <a
                      href={`/images/images.png`}
                      target='_blank'
                    >
                      <img
                        src={`/images/images.png`}
                        width={100}
                        height={100}
                        alt='profile' />
                    </a>
                  }
                </td>
                 <td className="px-6 py-4">{item.attributes.email}</td>
                {/* {/* <td className="px-6 py-4">
                  <a
                    href={`http://localhost:8000/storage/${item.file_path}`}
                    target='_blank'
                  >
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        View  file
                      </span>
                    </button>
                  </a>
                </td> */}
                {role == "doctors" &&<>
                  <td className="px-6 py-4">{item.attributes.number}</td>
                  <td className="px-6 py-4">{item.attributes.qualification}</td>
                  <td className="px-6 py-4">{item.attributes.experiance}</td></>
                }
                <td className="py-4">

                  <Link href={`${role}/${item.id}`}> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {role == "patients" ? "Consult" : "More information"}
                    </span>
                  </button></Link>
    
            </td>
              </tr>))} 
          </tbody>
        </table>
        
      </div>
      <div className="flex justify-center my-4">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Previous
          </button>
        )}

        {user.length > endIndex && (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Strapi;

