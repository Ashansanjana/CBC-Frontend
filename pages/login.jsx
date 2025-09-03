import  { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleLogin() {
      try {
        const response = await axios.post("http://localhost:3000/user/login", {
            email: email,
            password: password
        })
       toast.success("Login Successful");
       console.log(response.data);
      
      } catch (error) {
        console.error(error.response.data.message);
        toast.error(error.response.data.message);
      }}

  return (

    <div className="w-full h-screen bg-[url('/login_background.jpg')] bg-center bg-cover flex">
      {/* Left Side (can be for branding / image / logo) */}
      <div className="w-[50%] h-full flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Welcome Back
        </h1>
      </div>

      {/* Right Side (Login Card) */}
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[500px] h-[600px] bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col justify-center items-center p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-white drop-shadow-md mb-6">
            Login to Your Account
          </h2>

          {/* Username Input */}
          <input
            onChange={
              (e) => setEmail(e.target.value)} value={email}
            type="text"
            placeholder="Username"
            className="w-[300px] h-[50px] px-4 border border-white/40 bg-white/10 rounded-xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c3efe9] transition"
          />

          {/* Password Input */}
          <input
            onChange={
              (e) => setPassword(e.target.value)} value={password}
            type="password"
            placeholder="Password"
            className="w-[300px] h-[50px] px-4 border border-white/40 bg-white/10 rounded-xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c3efe9] transition"
          />

          {/* Login Button */}
          <button onClick={handleLogin} className="w-[300px] h-[50px] bg-[#c3efe9] text-gray-800 font-semibold rounded-xl mt-4 hover:bg-[#a8e0d7] transition shadow-md">
            Login
          </button>

          {/* Extra Links */}
          <div className="flex justify-between w-[300px] text-sm text-white/80 mt-4">
            <a href="#" className="hover:underline">Forgot Password?</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
