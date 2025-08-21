import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-purple-500 to-orange-300">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start p-10  text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to My To-Do App
        </h1>
        <p className="text-lg mb-8 max-w-md">
          Organize your daily tasks, boost productivity, and never miss a goal.
          Sign up today and get started for free!
        </p>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 ">
        <img
          src={'/img.png'}
          alt="Productivity"
          className="h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Landing;
