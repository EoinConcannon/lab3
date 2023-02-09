var theArray = [];
addTask('para');
console.log(theArray[0]);
//console.log(theArray[1]);
//console.log("The size of the array is " + theArray.length);
console.log(addTask("nextValue"));
console.log(addTask("test"));
listAllTasks();
console.log(deleteTask("test"));
listAllTasks();
function addTask(task) {
    //theArray.push('pushed');
    theArray.push(task); //0
    console.log("Added " + task + " to array");
    return theArray.length;
}
function listAllTasks() {
    /*for(let i = 0; i < theArray.length; i++)
    {
        console.log(i + ": " + theArray[i]);
    }*/
    theArray.forEach(function (item) {
        console.log("Task " + item + " is in our list.");
    });
}
function deleteTask(task) {
    var index = theArray.indexOf(task);
    if (index > -1) {
        theArray.splice(index, 1);
        console.log("Task " + task + " has been removed from list");
    }
    else {
        console.log("Task " + task + " is not on the list");
    }
    return theArray.length;
}
