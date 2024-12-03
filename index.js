"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
function logTodo(id, title, completed) {
    console.log("\n        Todo ID: ".concat(id, "\n        Todo Title: ").concat(title, "\n        Todo Completed: ").concat(completed, "\n        "));
}
