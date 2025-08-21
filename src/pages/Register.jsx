import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../services/allapi";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();


  // handle register
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = form;

    if (!username || !email || !password) {
      alert("Please fill all field");
    } else {
      const result = await registerApi({ username, email, password });
      //console.log(result.data);
      if (result.status == 200) {
        alert("Register Successfully");
        setForm({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        alert("something went wrong");
      }
    }
  };
  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-200  to-orange-200"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-[400px]"
        >
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 mb-3"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>

          <hr />
          <p className="text-center mt-4 text-gray-500 ">
            Already have an account ?{" "}
            <Link className="text-blue-600" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
