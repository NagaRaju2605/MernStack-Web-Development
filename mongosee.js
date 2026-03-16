const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model("Student", studentSchema);


// CREATE
app.post("/add", async (req,res)=>{
  const student = new Student(req.body);
  await student.save();
  res.send("Student Added");
});


// READ
app.get("/students", async (req,res)=>{
  const data = await Student.find();
  res.json(data);
});


// UPDATE
app.put("/update/:id", async (req,res)=>{
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send("Student Updated");
});


// DELETE
app.delete("/delete/:id", async (req,res)=>{
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student Deleted");
});


app.listen(3000, ()=>{
  console.log("Server running on port 3000");
});