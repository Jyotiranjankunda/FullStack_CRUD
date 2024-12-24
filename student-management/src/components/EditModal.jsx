import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { editStudent } from "../features/studentSlice";
import { useNavigate, useParams } from "react-router-dom";
import Input from "./Input";

const EditModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students, loading } = useSelector((state) => state.app);
  const { id } = useParams();

  const [updatedStudent, setUpdatedStudent] = useState({
    name: "",
    cohort: "",
    courses: "",
    status: "",
  });

  useEffect(() => {
    if (id) {
      const student = students.filter((e) => e.id == id);
      if (student[0]) {
        setUpdatedStudent({
          ...student[0],
          status: student[0].status ? "active" : "inactive",
        });
      }
    }
  }, [id, students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevState) => ({
      ...prevState,
      [name]: name === "status" ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const finalData = {
      ...updatedStudent,
      status: updatedStudent.status === "active",
    };

    dispatch(editStudent(finalData));
    console.log("Final data", finalData);
    setUpdatedStudent({});
    navigate("/");
  };

  const handleClose = () => {
    setUpdatedStudent({});
    navigate("/");
  };

  return (
    <div>
      <div className="p-4 w-full">
        <h2 className="font-bold text-center mb-4 text-lg">Edit Details</h2>

        <form
          method="dialog"
          className="flex flex-col gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <Input
            title="Name"
            placeholder="Enter your name"
            name="name"
            value={updatedStudent.name || ""}
            onChange={handleChange}
          />
          <Input
            title="Cohort"
            placeholder="Cohort"
            name="cohort"
            value={updatedStudent.cohort || ""}
            onChange={handleChange}
          />
          <Input
            title="Courses"
            placeholder="Enter in comma separated format"
            name="courses"
            value={updatedStudent.courses || ""}
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
                checked={updatedStudent.status === "active"}
                onChange={handleChange}
                required
              />
              <label htmlFor="status-active">Active</label>
            </div>
            <div className="px-1">
              <input
                type="radio"
                className=""
                name="status"
                value="inactive"
                id="status-inactive"
                checked={updatedStudent.status === "inactive"}
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

export default EditModal;
