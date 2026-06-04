"use client";

import { useState } from "react";
import Link from "next/link";

import { Input, Button, Card } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,  
    });
  };

  // Handle Signin
  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe, // Fixed: using formData.rememberMe instead of true
        callbackURL: "/", 
      });

      if (error) {
        toast.error(error.message);
        return;
      }
      
     if (data) {
        toast.success("Logged in successfully!");
        
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4 py-10">
      <Card className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        
        <div className="p-8">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignin} className="space-y-5">
            
            {/* Email */}
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              value={formData.email}
              onChange={handleChange}
              isRequired
              classNames={{
                input: "text-white",
                label: "text-zinc-300",
                inputWrapper:
                  "bg-zinc-900/60 border border-zinc-700 hover:border-zinc-500",
              }}
            />

            {/* Password */}
            <Input
              name="password"
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              isRequired
              endContent={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              }
              classNames={{
                input: "text-white",
                label: "text-zinc-300",
                inputWrapper:
                  "bg-zinc-900/60 border border-zinc-700 hover:border-zinc-500",
              }}
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900/60 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-zinc-300">
                Remember me
              </label>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={loading}
              color="primary"
              className="h-12 w-full rounded-xl text-base font-semibold"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-zinc-400">
            Dont have an account?{" "}
            <Link
              href="/singup"
              className="font-medium text-blue-400 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}