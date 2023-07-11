"use client"
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useUser(id) {
  const { data, error, isLoading } = useSWR(`http://localhost:8000/api/patient/${id}`, fetcher);
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

  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>...error</div>;

  return (
    <>
      <section className="text-gray-600 body-font h-full">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <input type="text" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" value={user.name}>
              {user.name}
            </input>
            <p className="mb-8 leading-relaxed">
              {user.email}
            </p>
            <div className="flex justify-center">
              <button onClick={() => fetch(`http://localhost:8000/api/patient/${id}`, {
                method: 'PUT', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: 'iPhone Galaxy +1',
                  email:"iphioenasdjkfnasdm,f"
                })
              })
                .then(res => res.json())
                .then(console.log)
            } className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              EDIT
            </button>
            <button onClick={() => fetch(`http://localhost:8000/api/patient/${id}`, {
              method: 'DELETE',
            })
              .then(res => res.json())
              .then(console.log)} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </section >

         
      
    </>
  );
}
