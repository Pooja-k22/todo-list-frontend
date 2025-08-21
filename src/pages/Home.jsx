import React, { useContext, useEffect, useState } from "react";
import AddItem from "./AddItem";
import Header from "../components/Header";
import {
  FaTrash,
  FaEdit,
  FaCheck,
  FaCheckCircle,
  FaRegCheckCircle,
} from "react-icons/fa";
import Edit from "./Edit";
import { tokenContext } from "../contex/ContexShare";
import { deleteItemApi, getItemApi, statusUpdateApi } from "../services/allapi";

function Home() {
  const { token, setToken } = useContext(tokenContext);
  const [addstatus, setAddStatus] = useState("");
  const [editstatus, setEditStatus] = useState("");
  const [deletestatus, setDeleteStatus] = useState("");
  const [statusStatus, setstatusStatus] = useState("");

  const [todos, setTodos] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  // get all user todo items
  const fetchTodos = async (tok) => {
    //console.log(tok);

    const reqHeader = {
      Authorization: `Bearer ${tok}`,
    };
    const result = await getItemApi(reqHeader);
    //console.log(result.data);
    if (result.status == 200) {
      setTodos(result.data);
    }
  };


  // handle status update
  const handleStatus = async (id, status) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const reqBody = {
      status: status === "completed" ? "pending" : "completed",
    };
    const result = await statusUpdateApi(id, reqBody, reqHeader);
    if (result.status == 200) {
      setstatusStatus(result.data);
    } else {
      alert("something went wrong");
    }
  };


  // handle delete item
  const handleDelete = async (id) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteItemApi(id, reqHeader);
    if (result.status == 200) {
      alert("Deleted successfully");
      setDeleteStatus(result.data);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    const tok = sessionStorage.getItem("token");
    setToken(tok);
    fetchTodos(tok);
  }, [addstatus, editstatus, deletestatus, statusStatus]);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className="relative w-full mb-9 md:mb-0 md:p-9 h-[450px]">
        <img
          src="https://mindsparklemag.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/11/80004f68741469.5bae1b8424f4c.jpg.webp"
          alt="Motivation"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-semibold italic text-center px-4">
            Small steps every day lead to big achievements.
          </h2>
        </div>
      </div>

      {/* Add Section */}
      <div className="flex justify-between items-center mx-9 pb-5 border-b border-gray-300">
        <div className="text-xl font-bold">Add your tasks</div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-amber-700 text-white px-3 py-2 rounded hover:bg-amber-800"
        >
          + Add List
        </button>
      </div>

      {/* Todo List Section */}
      <div className="p-6 max-w-5xl mx-auto">
        <ul className="space-y-3">
          {todos?.length > 0 ? (
            todos?.map((todo) => (
              <li
                key={todo._id}
                className="flex justify-between items-center bg-white shadow p-4 rounded"
              >
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      todo.status === "completed"
                        ? "line-through text-gray-400"
                        : "text-purple-900"
                    }`}
                  >
                    {todo.title}
                  </h3>
                  <p className="text-gray-600">{todo.description}</p>
                </div>

                <div className="flex gap-2">
                  {/* Edit */}
                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 flex items-center"
                  >
                    <FaEdit />
                  </button>
                  {isEditModalOpen && (
                    <Edit
                      id={todo?._id}
                      onClose={() => setIsEditModalOpen(false)}
                      setEditStatus={setEditStatus}
                    />
                  )}

                  {/* status*/}
                  <button
                    onClick={() => handleStatus(todo?._id, todo?.status)}
                    className={`p-2 rounded flex items-center ${
                      todo.status === "completed"
                        ? "bg-purple-300 text-purple-800 hover:bg-purple-400"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    {todo.status === "completed" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaRegCheckCircle />
                    )}
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(todo?._id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 flex items-center"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No items</p>
          )}
        </ul>
      </div>

      <div>
        {isAddModalOpen && (
          <AddItem
            onClose={() => setIsAddModalOpen(false)}
            setAddStatus={setAddStatus}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
