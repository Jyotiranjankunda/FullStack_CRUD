import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  loading: false,
  error: null,
};

//create student
export const createStudent = createAsyncThunk(
  "createStudent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      const result = response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error: ", error);
      return rejectWithValue(error);
    }
  }
);

// read student
export const fetchStudents = createAsyncThunk(
  "fetchStudents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error: ", error);
      return rejectWithValue(error);
    }
  }
);

// update student
export const editStudent = createAsyncThunk(
  "editStudent",
  async (data, { rejectWithValue }) => {
    const { id } = data;
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete student
export const deleteStudent = createAsyncThunk(
  "deleteStudent",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const studentReducer = createSlice({
  name: "studentReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        state.students.push(action.payload);
        // console.log(state.students);
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.students = state.students.filter((student) => student.id !== id);
        // console.log(state.students);
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        state.students = state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        );
        // console.log(state.students);
      })
      .addCase(editStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentReducer.reducer;
