"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    //   event.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`${
        loading ? "loading" : ""
      } w-96 grid gap-6 text-center border border-black p-8 rounded-3xl`}
    >
      <h3 className="text-3xl font-semibold text-[#22668D]">Sign Up</h3>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value={values.username}
        className="border-black"
        // error={errors.username ? true : false}
        onChange={onChange}
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        className="border-black"
        // error={errors.password ? true : false}
        onChange={onChange}
      />
      <Input
        type="password"
        placeholder="Password"
        className="border-black"
        name="password"
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        className="border-black"
      />
      <Button className="bg-[#8ECDDD] hover:bg-[#8ECDDD]/70">Sign Up</Button>
      <small>
        Already Registered?{" "}
        <Link href="/signin" className="text-[#22668D]">
          Sign in
        </Link>
      </small>
    </form>
    // {Object.keys(errors).length > 0 && (
    //   <div className="ui error message">
    //     <ul className="list">
    //       {Object.values(errors).map((value) => (
    //         <li key={value}>{value}</li>
    //       ))}
    //     </ul>
    //   </div>
    // )}
  );
}
