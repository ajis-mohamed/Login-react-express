import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Signin() {
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    // Form Field States
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    // Regex Validation Patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    // Field Validations
    const isEmailValid = emailPattern.test(email);
    const isPassValid = passwordPattern.test(pass);
    const isFormValid = isEmailValid && isPassValid;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        const cleanEmail = encodeURIComponent(email.trim());
        const cleanPassword = encodeURIComponent(pass.trim());

        try {
            const res = await fetch(
                `http://localhost:5000/signin?email=${cleanEmail}&password=${cleanPassword}`
            );
            const message = await res.text();
            console.log(message);

            if (message === "Login Successful") {
                alert("Login Successful");
            } else {
                alert("Login failed");
            }
        } catch (err) {
            console.error("Network Error:", err);
        }
    };

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
                <form onSubmit={handleSubmit} className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4 sm:p-5">
                    <h1 className="font-serif text-2xl tracking-wide text-white">
                        Welcome Back
                    </h1>
                    <p className="mt-1 text-[8px] leading-4 text-white/40 sm:text-[9px]">
                        Sign in to manage your spaces and saved pieces.
                    </p>

                    {/* EMAIL */}
                    <div className="mt-5">
                        <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-wider text-white/50">
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className={`h-9 w-full rounded-md border bg-white px-3 text-[10px] text-gray-700 outline-none transition-all placeholder:text-gray-400 ${
                                    email && !isEmailValid
                                        ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
                                        : "border-white/10 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
                                }`}
                                name="email"
                                value={email}
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                        </div>
                        {email && !isEmailValid && (
                            <p className="mt-1 text-[8px] text-red-300">
                                Enter a valid email address.
                            </p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="mt-4">
                        <div className="mb-1.5 flex items-center justify-between">
                            <label className="text-[8px] font-semibold uppercase tracking-wider text-white/50">
                                Password
                            </label>
                            <button
                                type="button"
                                className="text-[8px] text-teal-300 transition hover:text-teal-200"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className={`h-9 w-full rounded-md border bg-white pl-3 pr-9 text-[10px] text-gray-700 outline-none transition-all placeholder:text-gray-400 ${
                                    pass && !isPassValid
                                        ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
                                        : "border-white/10 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
                                }`}
                                name="password"
                                value={pass}
                                onChange={(evt) => setPass(evt.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 transition hover:text-gray-600"
                            >
                                {showPassword ? "◉" : "○"}
                            </button>
                        </div>
                        {pass && !isPassValid && (
                            <p className="mt-1 text-[8px] text-red-300">
                                Must contain at least 8 characters, a letter, and a number.
                            </p>
                        )}
                    </div>

                    {/* REMEMBER */}
                    <label className="mt-3 flex cursor-pointer items-center gap-1.5">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="h-3 w-3 accent-teal-400"
                        />
                        <span className="text-[8px] text-white/40">Remember me</span>
                    </label>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`mt-4 h-9 w-full rounded-md text-[10px] font-bold transition-all duration-300 ${
                            isFormValid
                                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-[#063536] hover:-translate-y-[1px] hover:shadow-[0_8px_25px_rgba(45,212,191,0.2)] active:scale-[0.98]"
                                : "cursor-not-allowed bg-white/10 text-white/30"
                        }`}
                    >
                        Sign In →
                    </button>

                    {/* DIVIDER */}
                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-[7px] uppercase text-white/25">Or</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* SOCIAL BUTTONS */}
                    <button
                        type="button"
                        className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 text-[9px] text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                        <span className="text-[11px] font-semibold">G</span>
                        Continue with Google
                    </button>

                    <button
                        type="button"
                        className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 text-[9px] text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                        <span className="text-[11px]"></span>
                        Continue with Apple
                    </button>

                    {/* LINK FOOTER */}
                    <p className="mt-5 text-center text-[8px] text-white/30">
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="ml-1 text-teal-300 transition hover:text-teal-200"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Signin;