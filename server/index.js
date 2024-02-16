const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment, getFortune, getAllTasks, addTheTask, deleteTheTask} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
//New Features - A To do
app.get("/api/tasks", getAllTasks);
app.post("/api/tasks", addTheTask);
app.delete("/api/tasks/:id",deleteTheTask);

app.listen(4000, () => console.log("Server running on 4000"));
