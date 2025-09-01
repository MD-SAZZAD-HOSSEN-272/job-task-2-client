import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

const UpdateData = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
 
  const axiosSecure = useAxiosSecure()
  const {id} = useParams();
  console.log(id);

  const {data} = useQuery({
    queryKey: ['jobs', id],
    queryFn: async() => {
        console.log(id);
        const res = await axiosSecure.get(`/my_jobs/${id}`)
        return res.data
    }
  })
  console.log(data);
   const { register, handleSubmit } = useForm({
    defaultValues: {
        position: data?.position || []
    }
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    data.posterEmail = user?.email
         axiosSecure.patch(`/update_jobs/${id}`, data).then(result => {
            console.log(result);
            navigate('/dashboard/my_posted_Jobs')
         })
        console.log(data);
    // reset();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-8">
      <h1 className="text-2xl font-bold text-center mb-6">Update Data</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter task title"
            defaultValue={data?.title}
          />
        </div>

        {/* Details */}
        <div>
          <label className="block font-semibold">Details</label>
          <textarea
            {...register("details")}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Write details..."
            defaultValue={data?.details}
          ></textarea>
        </div>

        {/* Fixed Price */}
        <div>
          <label className="block font-semibold">Fixed Price</label>
          <input
            type="number"
            {...register("fixedPrice")}
            className="w-full border rounded-lg px-3 py-2"
            defaultValue={data?.fixedPrice}
          />
        </div>

        {/* Position (Multiple with Checkbox) */}
        <div>
          <label className="block font-semibold mb-2">Position</label>
          <div className="flex gap-4">
            <label>
              <input type="checkbox" value="remote" {...register("position")} /> Remote
            </label>
            <label>
              <input type="checkbox" value="senior_level" {...register("position")} /> Senior Level
            </label>
            <label>
              <input type="checkbox" value="freelancer" {...register("position")} /> Freelancer
            </label>
          </div>
        </div>

        {/* Category (Multiple with Checkbox) */}
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <div className="flex gap-4">
            <label>
              <input type="checkbox" value="design" {...register("category")} /> Design
            </label>
            <label>
              <input type="checkbox" value="art_generator" {...register("category")} /> Art Generator
            </label>
            <label>
              <input type="checkbox" value="illustration" {...register("category")} /> Illustration
            </label>
          </div>
        </div>

        {/* Posted By */}
        <div>
          <label className="block font-semibold">Post By</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            {...register("postedBy")}
            className="w-full border rounded-lg px-3 py-2 bg-gray-100"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
