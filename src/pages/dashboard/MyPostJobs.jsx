import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const MyPostJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate()

  if(loading){
    return <p>loading.......</p>
  }

  const { data, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my_jobs/?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    axiosSecure.delete('/my_jobs', {data: {id}}).then(result => {
        console.log(result);
        refetch()
    })
    console.log(id);
  }

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-bold ">{data?.length} Jobs Found</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10 mb-10">
        {data?.map((job) => (
          <div
            key={job?._id}
            className="space-y-3 shadow-xl group hover:shadow-2xl px-5 py-4 rounded-2xl"
          >
            <p className="text-gray-500">{job?.date}</p>
            <h3 className="text-[#4B4B4B] font-bold text-2xl">{job?.title}</h3>
            <p className="bg-[#CCCCCC] p-3 rounded flex justify-between">
              Fixed Price Project <span>${job?.fixedPrice}</span>
            </p>
            <p>{job?.details}</p>
            <p className="flex gap-3 text-[#05AF2B] text-xs font-semibold">
              {job?.position?.map((p, index) => (
                <p key={index} className="bg-[#05af2a36] p-1 rounded">
                  {p}
                </p>
              ))}
            </p>
            <p className="flex gap-3">
              {job?.category?.map((c, index) => (
                <p key={index} className="bg-gray-200 rounded py-1 px-2">
                  {c}
                </p>
              ))}
            </p>
            <p className="bg-[#CCCCCC] p-3 rounded">
              Post By: <span>{job?.postedBy}</span>
            </p>
            <button onClick={() => navigate(`/dashboard/my_jobs/${job?._id}`)} className="bg-green-500 text-white py-2 cursor-pointer px-3 rounded-3xl">
              Update Data
            </button>
            <button onClick={() => handleDelete(job?._id)} className="bg-red-400 hover:bg-red-500 ml-3 text-white py-2 cursor-pointer px-3 rounded-3xl">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostJobs;
