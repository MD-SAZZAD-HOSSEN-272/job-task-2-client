import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const AllJobsList = () => {
  const axiosSecure = useAxiosSecure();
  const [category, setCategory] = useState('web developer')
console.log(category);
  const { data } = useQuery({
    queryKey: ["jobs", category],
    queryFn: async () => {
      const res = await axiosSecure.get(`/jobs/?search=${category}`);
      return res.data;
    },
  });

  return (
    <div className="mb-10 ">
      <div className="bg-[#0b1c0b] w-full">
        <div className="flex items-center gap-3  p-6 justify-center">
          {/* Search Box */}
          <div
            className="flex items-center w-[600px] bg-[#0f1f0f] rounded-full px-4 py-2 border border-transparent 
        focus-within:border-green-400 shadow-lg relative"
          >
            {/* Input */}
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Search your needs"
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
            />

            {/* Dropdown */}
            <div className="flex items-center gap-1 text-white cursor-pointer px-2">
              <span className="font-medium">{category}</span>
              <BiChevronDown size={18} className="text-gray-400" />
            </div>

            {/* Search Icon */}
            <button className="ml-3 bg-green-500 hover:bg-green-600 p-2 rounded-full transition">
              <BiSearch size={18} className="text-white" />
            </button>
          </div>

          {/* Advanced Search Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full transition">
            Advanced search
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 mt-10">
        {data?.length || 0} search result(s) found
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((job) => (
          <div
            key={job?._id}
            className="space-y-4 bg-white shadow-md hover:shadow-2xl group transition duration-300 p-6 rounded-2xl"
          >
            {/* Date */}
            <p className="text-gray-400 text-sm">{new Date(job?.date).toLocaleDateString()}</p>

            {/* Title */}
            <h3 className="text-gray-800 font-semibold text-xl leading-snug">
              {job?.title}
            </h3>

            {/* Price */}
            <div className="bg-gray-100 text-gray-700 text-sm p-3 rounded-lg flex justify-between font-medium">
              <span>Fixed Price Project</span>
              <span>${job?.fixedPrice}</span>
            </div>

            {/* Details */}
            <p className="text-gray-600 text-sm line-clamp-3">{job?.details}</p>

            {/* Position Badges */}
            <div className="flex flex-wrap gap-2">
              {job?.position?.map((p, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Category Badges */}
            <div className="flex flex-wrap gap-2">
              {job?.category?.map((c, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Posted By */}
            <div className="border-t border-gray-200 pt-3 text-sm text-gray-500">
              Posted By: <span className="font-medium">{job?.postedBy}</span>
            </div>

            {/* Apply Button */}
            <button className="w-fit group-hover:bg-green-600 cursor-pointer bg-black px-3 text-white py-2 rounded-full font-semibold transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AllJobsList;
