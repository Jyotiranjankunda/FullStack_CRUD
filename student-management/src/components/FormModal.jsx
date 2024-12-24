import { useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "../features/studentSlice";
import { useNavigate } from "react-router-dom";

const FormModal = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.app);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      status: formData.status === "active",
    };
    console.log("Formdata: ", updatedData);
    dispatch(createStudent(updatedData));
    handleClose();
  };

  const handleClose = () => {
    setFormData({});
    navigate('/')
  };

  return (
    <div>
      <div className="p-4 w-full">
        <h2 className="font-bold text-center mb-4 text-lg">Add a Student</h2>

        <form
          method="dialog"
          className="flex flex-col gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <Input
            title="Name"
            placeholder="Enter your name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
          <Input
            title="Cohort"
            placeholder="Cohort"
            name="cohort"
            value={formData.cohort || ""}
            onChange={handleChange}
          />
          <Input
            title="Courses"
            placeholder="Enter your courses"
            name="courses"
            value={formData.courses || ""}
            onChange={handleChange}
          />

          <div className="flex items-center gap-2 justify-start my-2">
            <label className="font-semibold">Status : </label>
            <div className="px-1">
              <input
                type="radio"
                name="status"
                value="active"
                id="status-active"
                checked={formData.status === "active"}
                onChange={handleChange}
                required
              />
              <label htmlFor="status-active">Active</label>
            </div>
            <div className="px-1">
              <input
                type="radio"
                name="status"
                value="inactive"
                id="status-inactive"
                checked={formData.status === "inactive"}
                onChange={handleChange}
                required
              />
              <label htmlFor="status-inactive">Inactive</label>
            </div>
          </div>

          <button
            className="bg-[#eeeeee] text-black p-2 rounded-md w-[100px] text-center self-center mt-2"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded-md w-[100px] text-center self-center mt-4"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
