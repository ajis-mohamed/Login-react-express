import React from "react";
import { useLocation } from "react-router-dom";
import LeftContent from "./LeftContent";
import Signin from "./Signin";
import Signup from "./Signup";

function AuthPage() {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#031f20]">
      {/* BACKGROUND IMAGE */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-[#032526]/20" />

      {/* GLOBAL GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-[150px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col lg:flex-row">
        <LeftContent />
        {isSignup ? <Signup /> : <Signin />}
      </div>
    </main>
  );
}

export default AuthPage;