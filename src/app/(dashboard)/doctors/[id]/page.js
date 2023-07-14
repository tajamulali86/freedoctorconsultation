"use client"
import { redirect } from "next/navigation"
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import Delete from "@/components/deletemodal";

const role="doctors"


const fetcher = (...args) => fetch(...args).then(res => res.json());

function useUser(id) {
  const { data, error, isLoading } = useSWR(`http://localhost:8000/api/${role}/${id}`, fetcher);
  console.log(data);
  return {
    user: data,
    isLoading,
    isError: error
  };
}


export default function DataPost(params) {
  const id = params.params.id;
  const { user, isLoading, isError } = useUser(id);
  console.log(user);
  function editme(id){
    console.log(id);
    }
  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>...error</div>;

  return (
    <>
      <section className="text-gray-600 body-font h-full">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={user.file_path?`http://localhost:8000/storage/${user.file_path}`:'/images/images.png'}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1  className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" >
              {user.name}
            </h1>
            <p className="mb-8 leading-relaxed">
              {user.email} 
            </p>
            <div className="flex justify-center">
           
            <Link href={`/${role}/${user.id}/edit`}><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-sky-400 group-hover:from-blue-500 group-hover:to-sky-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800" onClick={() => editme(user.id)} >
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">  EDIT  </span>   
              </button></Link>

             {/* <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"  onClick={() => fetch(`http://localhost:8000/api/doctors/${id}`, {
              method: 'DELETE',
            })
              .then(res => res.json())
              .then(console.log).then(alert(`${user.name} deleted`)
              ).then(redirect("/doctors") )
              } >
              DELETE
              </button> */}
              <Delete role={role} id={id} name={user.name} />
          </div>
        </div>
      </div>
    </section >

         
      
    </>
  );
}
