const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));


const tasks = ["go to the shop", "read a book", "write some poetry"];

const complete = ["walk the dog"];
 
app.post("/newtask", function(req, res) {
    const newTask = req.body.newtask;
    tasks.push(newTask);
    res.redirect("/");
});

app.post("/removetask", function(req, res) {
    const completeTask = req.body.check;

    if (typeof completeTask === "string") {
        complete.push(completeTask);

        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (const i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete });
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});