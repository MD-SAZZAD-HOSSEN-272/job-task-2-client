import { useForm } from "react-hook-form";
import { FaApple, FaEye, FaFacebook, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import Subtract from "/assets/Subtract.png";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate()
  const {signIn} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {password,email, ...rest } = data;
    signIn(email, password).then(result => {
        navigation('/')
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
    console.log(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-[#0b1c0b] text-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl grid md:grid-cols-2">
        {/* Left side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Login your account</h2>
          <p className="text-sm text-gray-400 mb-6">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-green-500">
              Sign Up
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 focus:border-green-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 focus:border-green-500 outline-none"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaRegEyeSlash className="absolute right-5 top-1/2 -translate-y-1/2" />
                  ) : (
                    <FaEye className="absolute right-5 top-1/2 -translate-y-1/2"></FaEye>
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="accent-green-500"
                />
                Remember Me
              </label>
              <Link to="/forgot" className="text-green-500">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold"
            >
              Login Now
            </button>
          </form>

          {/* Social Login */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaGoogle />
            </button>
            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaApple />
            </button>
            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaFacebook />
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <img
            src={Subtract}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
