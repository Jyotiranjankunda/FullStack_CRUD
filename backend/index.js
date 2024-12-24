const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const app = express();
const cors = require("cors");

const prisma = new PrismaClient();

dotenv.config();
app.use(express.json());
app.use(cors());

// Get all students
app.get("/", async (req, res) => {
  try {
    const allStudents = await prisma.student.findMany();
    res.status(200).json(allStudents);
  } catch (error) {
    console.error("Some error occurred:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching students." });
  }
});

// Create a student
app.post("/", async (req, res) => {
  try {
    const { name, cohort, courses, status } = req.body;

    const currentDate = new Date().toISOString();

    const currentTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());

    const newStudent = await prisma.student.create({
      data: {
        name,
        cohort,
        courses,
        dateJoined: currentDate,
        lastLogin: currentTime,
        status,
      },
    });

    res.status(200).json(newStudent);
  } catch (error) {
    console.error("Some error occurred :", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

// Update a student
app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cohort, courses, status } = req.body;

    const currentTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());

    const updatedStudent = await prisma.student.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        cohort,
        courses,
        lastLogin: currentTime,
        status,
      },
    });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the student." });
  }
});

// Delete a student
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const student = await prisma.student.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json(student);
  } catch (error) {
    console.error("Error deleting student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the student." });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
