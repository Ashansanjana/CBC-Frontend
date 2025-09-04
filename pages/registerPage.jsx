import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/user",
        { firstName, lastName, email, password }
      );

      toast.success("Registration Successful!");
      console.log(response.data);

      // After registration, navigate to login page
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/login_background.jpg')] bg-center bg-cover flex">

      {/* Left Side (Branding) */}
      <div className="w-[50%] h-full flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Join Us
        </h1>
      </div>

      {/* Right Side (Registration Card) */}
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[500px] h-[700px] bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col justify-center items-center p-8 space-y-6">

          <h2 className="text-3xl font-semibold text-white drop-shadow-md mb-6">
            Create Your Account
          </h2>

          {/* First Name Input */}
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            placeholder="First Name"
            className="w-[300px] h-[50px] px-4 border border-white/40 bg-white/10 rounded-xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c3efe9] transition"
          />

          {/* Last Name Input */}
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            placeholder="Last Name"
            className="w-[300px] h-[50px] px-4 border border-white/40 bg-white/10 rounded-xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c3efe9] transition"
          />

          {/* Email Input */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="w-[300px] h-[50px] px-4 border border-white/40 bg-white/10 rounded-xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c3efe9] transition"
          />

          {/* Password Input */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-[300px] h-[50px] px-4 border border-white/40 bg-white/10 rounded-xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c3efe9] transition"
          />

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-[300px] h-[50px] bg-[#c3efe9] text-gray-800 font-semibold rounded-xl mt-4 hover:bg-[#a8e0d7] transition shadow-md cursor-pointer"
          >
            Register
          </button>

          {/* Extra Links */}
          <div className="flex justify-between w-[300px] text-sm text-white/80 mt-4">
            <a href="/login" className="hover:underline">
              Already have an account?
            </a>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
