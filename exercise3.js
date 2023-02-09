var MyTasks = /** @class */ (function () {
    function MyTasks() {
        this.Tasks = [];
    }
    MyTasks.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task item " + task + " has been added to your list");
        return this.Tasks.length;
    };
    MyTasks.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log("Task " + item + " is in our list.");
        });
    };
    MyTasks.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task " + task + " has been removed from list");
        }
        else {
            console.log("Task " + task + " is not on the list");
        }
        return this.Tasks.length;
    };
    return MyTasks;
}());
var myTasks = new MyTasks();
myTasks.addTask("Test");
myTasks.addTask("func");
myTasks.listAllTasks();
myTasks.deleteTask("Test");
myTasks.listAllTasks();
