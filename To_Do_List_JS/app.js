let todo = [];

let req = prompt("Please enter your request...");

while (true) {
    if (req == "quit") {
        console.log("Quiting the app!!!");
        break;
    }

    if (req == "list") {
        console.log("---------------------");
        for (i=0; i<=todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("---------------------");
    }

    else if (req == "add") {
        let task = prompt("Please enter a task you want to add");
        todo.push(task);
        console.log("Task added(+)")
    }

    else if (req == "delete") {
        let idx = prompt("Please enter the task index you want to delete.");
        todo.splice(idx, 1);
        console.log("Task succesfully deleted(_)");
    }

    else {
        console.log("Wrong request!");
    }

    req = prompt("Please enter your request...");
}