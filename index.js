const express = require("express");
const app = express();

const cors = require("cors");

// using pool we can run queries for postgres
const pool = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES

// create a todo

app.post("/todos", async(req,res) => {
    try{
        // console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
        
        res.json(newTodo.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

// get all todos


app.get("/todos", async(req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        
    }
});

// get a todo

app.get("/todos/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id= $1", [id]);
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
        
    }
})

// update a todo

app.put("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const uodateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description,id]);

        res.json("Todo is updated");
    } catch (err) {
        console.error(err.message);
    }
})

// delete a todo


app.delete("/todos/:id", async(req,res) => {
    try {
        const {id} =  req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);

        res.json("Deleted successfully");
    } catch (err) {
        console.error(err.message);
    }
})













app.listen(5000,()=>{
    console.log("server has started on port 5000");
})