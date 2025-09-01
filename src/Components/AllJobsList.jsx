import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AllJobsList = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/jobs");
      return res.data;
    },
  });

  console.log(data);
  return (
    <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-4xl font-bold ">{data?.length} Jobs Found</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10 mb-10">
        {data?.map((job) => (
          <div key={job?._id} className="space-y-3 shadow-xl group hover:shadow-2xl px-5 py-4 rounded-2xl">
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
            <button className="group-hover:bg-[#05AF2B] bg-black text-white py-2 cursor-pointer px-3 rounded-3xl">
              apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobsList;
