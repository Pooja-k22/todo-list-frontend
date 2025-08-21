import React, { useContext, useEffect, useState } from "react";
import { tokenContext } from "../contex/ContexShare";
import { addItemApi } from "../services/allapi";

function AddItem({ onClose, setAddStatus }) {
  const { token, setToken } = useContext(tokenContext);
  const [form, setForm] = useState({ title: "", description: "" });

  // handle add item
  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, description } = form;
    if (!title || !description) {
      alert("Title is required!");
    } else {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const result = await addItemApi(form, reqHeader);
      if (result.status == 200) {
        alert(" item add successfully");
        setForm({ title: "", description: "" });
        onClose();
        setAddStatus(result.data);
      } else {
        alert("Something went wrong");
      }
    }
  };

  // handle cancel button
  const handlecancel = () => {
    onClose();
  };

  useEffect(() => {
    const tok = sessionStorage.getItem("token");
    setToken(tok);
  }, [token]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0000007d] ">
      <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
        <div className="text-purple-800 mb-4">
          <h1 className="text-xl font-bold">Add Item</h1>
        </div>

        <form onSubmit={handleAdd}>
          <div className="my-4">
            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded w-full"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Description"
              className="border p-2 rounded w-full"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div className="flex items-center justify-end gap-4 mt-7">
            <button
              type="button"
              onClick={handlecancel}
              className="border border-purple-800 text-purple-800 px-4 py-2 rounded hover:bg-purple-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
