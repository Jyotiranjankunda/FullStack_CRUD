import Button from "../components/Button";
import StudentDetails from "../components/StudentDetails";
import { useEffect } from "react";
import { deleteStudent, fetchStudents } from "../features/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const { students, loading } = useSelector((state) => state.app);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
    navigate("/");
  };

  return (
    <div className="bg-white mt-4 w-[100vw] md:w-[85vw]">
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="w-[260px] flex items-center justify-between bg-white">
          <Button value="ay25" text="AY 2024-25" />
          <Button value="cbse9" text="CBSE 9" />
        </div>
        <Link
          to="/create"
          className="bg-[#e9edf1] px-3 py-2 font-semibold text-[#3f526e] rounded-md"
        >
          + Add Student
        </Link>
      </div>

      <div className="bg-white mt-2 p-4">
        <div className="rounded-md pb-1 overflow-x-auto">
          <table className="bg-white w-full border-collapse">
            <thead className="text-center">
              <tr className="border-b-2 border-[#eaeaea]">
                <th className="p-3">Student Name</th>
                <th className="p-3">Cohort</th>
                <th className="p-3">Courses</th>
                <th className="p-3">Date Joined</th>
                <th className="p-3">Last Login</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-center p-2 bg-white">
              {loading ? (
                <tr>
                  <td colSpan="7">Loading...</td>
                </tr>
              ) : students.length > 0 ? (
                students.map((student) => (
                  <StudentDetails
                    key={student.id}
                    name={student.name || "Unknown"}
                    cohort={student.cohort || "NA"}
                    courses={student.courses || "NA"}
                    date={
                      student.dateJoined
                        ? new Date(student.dateJoined).toLocaleDateString()
                        : "NA"
                    }
                    loginTime={student.lastLogin || "NA"}
                    status={student.status ? "active" : "inactive"}
                    actions={
                      <div className="flex items-center gap-3 justify-center">
                        <Link
                          to={`/edit/${student.id}`}
                          className="py-1 px-2 rounded-md bg-[#eaeaea] text-black outline-none"
                        >
                          Edit
                        </Link>
                        <button
                          className="py-1 px-2 rounded-md bg-red-700 text-white outline-none"
                          onClick={() => {
                            handleDelete(student.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    }
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="7">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
