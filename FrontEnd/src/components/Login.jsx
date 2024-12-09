import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`, userinfo);
      console.log("Response:", res.data);

      if (res.data) {
        toast.success('Logged in Successfully!');
        localStorage.setItem("user", JSON.stringify({
          _id: res.data._id,
          fullname: res.data.fullname,
          email: res.data.email,
          number: res.data.number,
        }));

        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error("Login Error: " + (err.response?.data?.message || "Invalid Credentials"));
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
          <h3 className="font-bold text-lg text-center mb-4">Login</h3>

          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input 
              {...register("email", { required: true })} 
              type="email" 
              placeholder="Enter your Email" 
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
            Login
          </motion.button>

          <p className="text-sm text-center mt-4">Not Registered? 
            <Link to="/Signup" className="underline text-blue-500"> Signup</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
