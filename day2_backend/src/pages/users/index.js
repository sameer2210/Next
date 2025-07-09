import useSWR from "swr";

// this file is used to fetch data from the API
// it uses the fetch API to make requests and returns the response as JSON
// it can be used with SWR or any other data fetching library
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserIndexSWR = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/userApi",
    fetcher
  );
  if (error) return <div className="text-red-500">{error.message}</div>;
  if (isLoading) return <div className="text-blue-500">Loading...</div>;
  if (!data) return <div className="text-yellow-500">No data found</div>;
  console.log(data);

  if (!Array.isArray(data?.data)) {
    return <div className="text-yellow-500">Unexpected data format</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">
        This is users index show data by useSWR
      </h1>
      <ul>
        <ul>
          {data.data.map((item) => (
            <li className="p-2 bg-zinc-200 mb-3 rounded" key={item.id}>
              <a href={`/users/${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default UserIndexSWR;
