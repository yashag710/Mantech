import { useState } from "react";
import rightSideImage from "../assets/login_image.svg"
import mantech_logo from "../assets/mantech_logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function LoginPage() {
  const [showPassword , setshowPassword] = useState(false);

  return (
    <div className="h-screen flex flex-row bg-white relative">
       
      <div className="w-full md:w-1/2 flex flex-col px-8 py-6 bg-white ml-4">

        <div>
          <img 
          src={mantech_logo}
          alt="Mantech Logo"
          className="h-8 w-32"     
          />
        </div>
     
        <div className="mt-20">
            <h2 className="text-4xl font-bold mb-6">Log in</h2>

        
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
                Username
            </label>
            <input
                type="text"
                placeholder="Enter your Username"
                className="w-full border-b-1 border-gray-300 rounded-xl px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

         
            <div className="mb-4 relative">
            <label className="block text-gray-700 font-semibold mb-2">
                Password
            </label>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                className="w-full border-b-1 border-gray-300 rounded-xl px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button"
                onClick={() => setshowPassword(prev => !prev)}
                className="absolute mt-8 inset-y-0 right-0 pr-3 flex items-center"
            >
                {showPassword ? (
                <AiOutlineEyeInvisible className="text-gray-600" size={20} />
                ) : (
                <AiOutlineEye className="text-gray-600" size={20} />
                )}
            </button>
            </div>

         
            <div className="text-right mb-6">
            <a href="#!" className="text-red-500 hover:underline">
                Forgot password ?
            </a>
            </div>

           
            <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-full
                        hover:bg-blue-700 transition-colors font-semibold"
            >
            Login
            </button>

            <p className="text-sm text-gray-400 mt-20">
            Version 1.0 | © All rights reserved by ManTech
            </p>
        </div>
      </div>

      <div className="hidden md:flex md:w-full items-center justify-center relative h-screen">
        <img
          src={rightSideImage}
          alt="Man holding laptop illustration"
          className="absolute z-10 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default LoginPage;
