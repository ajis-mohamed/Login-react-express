import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import axios from "axios"

function Signup() {
  const Api_url = "https://backend-login-three-delta.vercel.app"
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // 1. Form Field States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // 2. Simple Checks using basic Regex
  const isNameValid = fullName.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8; // simplified to 8+ chars

  // 3. Form is ready when everything is true
  const isFormValid = isNameValid && isEmailValid && isPasswordValid && agreeToTerms;

  return (
    <section className="relative flex w-full items-center justify-center px-4 py-8 sm:px-8 lg:w-[430px] lg:flex-shrink-0 lg:px-10 xl:w-[460px]">
      <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-[#0b3535]/65 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-4">
        {/* TABS */}
        <div className="flex gap-1 rounded-xl bg-black/10 p-1">
          <Link
            to="/signin"
            className={
              location.pathname === "/signin"
                ? "flex-1 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 py-2 text-center text-[10px] font-semibold text-[#063536] shadow-[0_4px_15px_rgba(45,212,191,0.15)] sm:text-[11px]"
                : "flex-1 rounded-lg py-2 text-center text-[10px] text-white/50 transition duration-300 hover:bg-white/5 hover:text-white"
            }
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className={
              location.pathname === "/signup"
                ? "flex-1 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 py-2 text-center text-[10px] font-semibold text-[#063536] shadow-[0_4px_15px_rgba(45,212,191,0.15)] sm:text-[11px]"
                : "flex-1 rounded-lg py-2 text-center text-[10px] text-white/50 transition duration-300 hover:bg-white/5 hover:text-white"
            }
          >
            Create Account
          </Link>
        </div>

        {/* FORM */}
        <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4 sm:p-5">
          <h1 className="font-serif text-2xl tracking-wide text-white">
            Create Account
          </h1>
          <p className="mt-1 text-[8px] leading-4 text-white/40 sm:text-[9px]">
            Join us to curate your spaces and save your favorite pieces.
          </p>

          {/* FULL NAME */}
          <div className="mt-5">
            <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-wider text-white/50">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="h-9 w-full rounded-md border border-white/10 bg-white px-3 text-[10px] text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
            />
            {fullName && !isNameValid && (
              <p className="mt-1 text-[8px] text-red-300">Name must be at least 2 characters.</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="mt-4">
            <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-wider text-white/50">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="h-9 w-full rounded-md border border-white/10 bg-white px-3 text-[10px] text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
            />
            {email && !isEmailValid && (
              <p className="mt-1 text-[8px] text-red-300">Enter a valid email address.</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mt-4">
            <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-wider text-white/50">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-9 w-full rounded-md border border-white/10 bg-white pl-3 pr-9 text-[10px] text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 transition hover:text-gray-600"
              >
                {showPassword ? "◉" : "○"}
              </button>
            </div>
            {password && !isPasswordValid && (
              <p className="mt-1 text-[8px] text-red-300">Password must be at least 8 characters.</p>
            )}
          </div>

          {/* TERMS */}
          <label className="mt-3 flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="h-3 w-3 accent-teal-400"
            />
            <span className="text-[8px] text-white/40">
              I agree to the Terms & Privacy Policy
            </span>
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type="button"
            disabled={!isFormValid}
            onClick={async() => 
              {
                isFormValid && navigate("/signin")
                const data = await axios.post(`${Api_url}/signup`,{username:fullName,email:email,password:password});
                try {
                  const response = await data
                  console.log(response.data);
                } catch (error) {
                  console.log("error",error);
                }
              }
            }
            className={`mt-4 flex h-9 w-full items-center justify-center rounded-md text-[10px] font-bold transition-all duration-300 ${isFormValid
                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-[#063536] shadow-[0_4px_15px_rgba(45,212,191,0.2)] hover:-translate-y-[1px] hover:shadow-[0_8px_25px_rgba(45,212,191,0.35)] active:scale-[0.98]"
                : "cursor-not-allowed border border-white/10 bg-white/5 text-white/30 backdrop-blur-md"
              }`}
          >
            Create Account →
          </button>

          {/* DIVIDER */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[7px] uppercase text-white/25">Or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* SOCIAL BUTTONS */}
          <button className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 text-[9px] text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <span className="text-[11px] font-semibold">G</span>
            Sign up with Google
          </button>

          <button className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 text-[9px] text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <span className="text-[11px]"></span>
            Sign up with Apple
          </button>

          {/* LINK FOOTER */}
          <p className="mt-5 text-center text-[8px] text-white/30">
            Already have an account?
            <Link
              to="/signin"
              className="ml-1 text-teal-300 transition hover:text-teal-200"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;