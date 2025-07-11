/* eslint-disable react/no-unescaped-entities */
// this file is used to fetch data from the API

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json()); // it uses the fetch API to make requests and returns the response as JSON (it can be used with SWR or any other data fetching library)

const UserIndexSWR = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/userApi",
    fetcher
  );
  if (error) return <div className="text-red-500">{error.message}</div>;
  if (isLoading) return <div className="text-blue-500">Loading...</div>;
  if (!data) return <div className="text-yellow-500">No data found</div>;
  // console.log(data);

  if (!Array.isArray(data?.data)) {
    return <div className="text-yellow-500">Unexpected data format</div>;
  }
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-green-500">
        This is users index show data by useSWR
      </h1>
      <ul>
        {data.data.map((item) => (
          <li className="p-2 bg-zinc-200 mb-3 rounded" key={item.id}>
            <a href={`/users/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="text-xl font-semibold">
        <h1>useSWR is a React Hook used to fetch data on the client side.</h1>
        <p className="text-green-400">
          If we using useSWR, you do not need code useEffect for fetching data
          manually.
        </p>
        <p>
          because useSWR data fetches data **on the client only**, so it's not
          rendered during server-side rendering. So, the data is not render to
          sources so to solve this use getServerSideProps combined with useSWR
        </p>
        <p className="text-red-500">
          if we use useSWR data is not available in server-side rendering = view
          in page source
        </p>
      </div>
    </div>
  );
};

export default UserIndexSWR;

//------------------------------------------------------------------------------------------------------

// import axios from "axios";

// export const getServerSideProps = async () => {
//   const response = await axios.get("http://localhost:3000/api/userApi");
//   const users = response.data?.data ?? []; //  Get the array safely
//   // console.log("Fetched users data:", users);

//   return {
//     props: {
//       data: users
//     }
//   };
// };

// const UserIndexSWR = (props) => {
//   return (
//     <div className=" p-8 space-y-8">
//       <h1 className="text-green-500 font-bold text-2xl">
//         this is getServerSideProps = this will give data in source or server
//         side view in page source
//       </h1>
//       <ul>
//         {props.data.map((item) => (
//           <li className="p-2 bg-zinc-200 mb-3 rounded" key={item.id}>
//             <a href={`/users/${item.id}`}>
//               {item.name} - {item.email}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserIndexSWR;
