import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../services/allapi";
import { tokenContext } from "../contex/ContexShare";

function Login() {
  const { setToken } = useContext(tokenContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  // handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) {
      alert("please fill all");
    } else {
      const result = await loginApi({ email, password });
      //console.log(result.data);
      if (result.status == 200) {
        alert("login successfully");
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        setToken(result.data.token);
        navigate("/home");
      } else if (result.status == 401 || result.status == 404) {
        alert(result.response.data);
        setForm({
          email: "",
          password: "",
        });
      } else {
        alert("Something went wrong");
        setForm({
          email: "",
          password: "",
        });
      }
    }
  };
  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-gradient-to-r from-green-200 via-teal-100 to-cyan-200
"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-[400px]"
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Login
          </button>
          <hr />
          <p className="text-center mt-4 text-gray-500 ">
            Don't have an account ?{" "}
            <Link className="text-green-600" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
