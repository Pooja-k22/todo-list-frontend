import React, { useContext, useEffect, useState } from "react";
import { tokenContext } from "../contex/ContexShare";
import { getAItemApi, UpdateitemApi } from "../services/allapi";

function Edit({ onClose, setEditStatus, id }) {
  const { token, setToken } = useContext(tokenContext);
  const [form, setForm] = useState({ title: "", description: "" });

  // handle edit item
  const handleEdit = async (e) => {
    e.preventDefault();
   const reqHeader = {
           Authorization: `Bearer ${token}`,
         };
         const result = await UpdateitemApi(id,form, reqHeader);
         if (result.status == 200) {
           alert(" item edit successfully");
           onClose();
           setEditStatus(result.data);
         } else {
           alert("Something went wrong");
         }
  };

  // handle cancel button
  const handlecancel = () => {
    onClose();
  };

  //handle get a item
  const fetchItem = async (token) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const result = await getAItemApi(id, reqHeader);
    console.log(result.data);
    if (result.status == 200) {
      setForm({
        title:result.data.title,
        description:result.data.description
      });
    }
  };

  useEffect(() => {
    const tok = sessionStorage.getItem("token");
    setToken(tok);
    fetchItem(tok);
  }, [token]);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#0000007d] ">
        <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
          <div className="text-purple-800 mb-4">
            <h1 className="text-xl font-bold">Edit Item</h1>
          </div>

          <form onSubmit={handleEdit}>
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
    </>
  );
}

export default Edit;
