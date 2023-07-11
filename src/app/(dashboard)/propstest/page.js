"use client"
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('http://localhost:8000/api/patients/2', fetch);
// //   let aata=  data.json();
//     console.log(data);
//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {JSON.stringify(data.name)}!</div>
// }
import { useEffect, useState } from 'react';

function Profile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/patients/2');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <div>Hello {data.name}!</div>;
}

export default Profile;
// export default Profile
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('http://localhost:8000/api/patients/2', fetch);
//   console.log(data)
//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   return <div key={data.id}>Hello {data.name}!</div>;
// }

// export default Profile;
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('http://localhost:8000/api/patients/2', fetch);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   // Parse the JSON data received from the response
//   const jsonData = JSON.parse(data);

//   return <div>Hello {jsonData.name}!</div>;
// }

// export default Profile;

// export default function Blog({ posts }) {
//     console.log(posts)
//     return (
//       <ul>
       
//           {/* <li>{posts.name}</li> */}
          
//        <h3>jasdfnajs</h3>
//       </ul>
//     )
//   }
   
//   // This function gets called at build time on server-side.
//   // It won't be called on client-side, so you can even do
//   // direct database queries.
//   export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('http://localhost:8000/api/patients/')
//     const posts = await res.json()
//     console.log(posts)

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }