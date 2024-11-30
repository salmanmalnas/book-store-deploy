import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from 'framer-motion';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      number: data.number,
      password: data.password,
    };

    try {
      const res = await axios.post("https://book-store-deploy-backend.onrender.com/user/signup", userinfo);
      toast.success("Signup Successful");
      navigate(from, { replace: true });

      localStorage.setItem("user", JSON.stringify({
        _id: res.data._id,
        fullname: userinfo.fullname,
        email: userinfo.email,
        number: userinfo.number
      }));
    } catch (err) {
      toast.error("Signup Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="grid h-screen items-center justify-center dark:bg-slate-900 dark:text-white relative">
      <motion.div 
        className="w-[340px] p-6 bg-white dark:bg-slate-800 border-2 rounded-lg shadow-lg border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg text-center mb-4">Signup</h3>

          <div className="mb-4">
            <label className="block text-sm mb-2">Your Name</label>
            <input 
              {...register("fullname", { required: true })} 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full border rounded-md px-3 py-2 dark:bg-slate-900 dark:text-white dark:border-white border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Mobile Number</label>
            <input 
              {...register("number", { required: true })} 
              type="text" 
              placeholder="Enter your mobile number" 
              className="w-full border rounded-md px-3 py-2 dark:bg-slate-900 dark:text-white dark:border-white border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.number && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input 
              {...register("email", { required: true })} 
              type="email" 
              placeholder="Enter your Email Id" 
              className="w-full border rounded-md px-3 py-2 dark:bg-slate-900 dark:text-white dark:border-white border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input 
              {...register("password", { required: true })} 
              type="password" 
              placeholder="Enter your Password" 
              className="w-full border rounded-md px-3 py-2 dark:bg-slate-900 dark:text-white dark:border-white border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <motion.button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 duration-300 rounded-md px-3 py-2 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Signup
          </motion.button>

          <p className="text-sm text-center mt-4">Have an account? 
            <Link to="/Login" className="underline text-blue-500"> Login</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
