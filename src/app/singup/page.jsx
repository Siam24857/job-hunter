"use client";

import { useState } from "react";
import Link from "next/link";

import { Input, Button, Card } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [role, setrole] = useState("seeker")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: role
      });

      if (result?.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Account created successfully!");
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
              Create Account
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Sign up to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            
            {/* Name */}
            <Input
              name="name"
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              variant="bordered"
              value={formData.name}
              onChange={handleChange}
              isRequired
              classNames={{
                input: "text-white",
                label: "text-zinc-300",
                inputWrapper:
                  "bg-zinc-900/60 border border-zinc-700 hover:border-zinc-500",
              }}
            />

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
             <div className="flex flex-col gap-4">
      <Label>Subscription plan</Label>
      <RadioGroup defaultValue="seeker" name="role" onChange={value => setrole(value)} orientation="horizontal">
        <Radio value="seeker">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Job seeker</Label>
            <Description>For side projects</Description>
          </Radio.Content>
        </Radio>
        <Radio value="recruiter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Recruiter</Label>
            <Description>Advanced reporting</Description>
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </div>
            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={loading}
              color="primary"
              className="h-12 w-full rounded-xl text-base font-semibold"
            >
              {loading ? "Creating..." : "Sign Up"}
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/singin"
              className="font-medium text-blue-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}