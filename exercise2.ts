let theArray:string[] = [];

addTask('para');

console.log(theArray[0]);
//console.log(theArray[1]);

//console.log("The size of the array is " + theArray.length);

console.log(addTask("nextValue"));
console.log(addTask("test"));

listAllTasks();
console.log(deleteTask("test"));
listAllTasks();

function addTask(task:string):number{
    //theArray.push('pushed');
    theArray.push(task);//0
    console.log("Added " + task + " to array");
    return theArray.length;
}

function listAllTasks():void{
    /*for(let i = 0; i < theArray.length; i++)
    {
        console.log(i + ": " + theArray[i]);
    }*/

    theArray.forEach((item)=>{
        console.log("Task " + item + " is in our list.");
    })
}

function deleteTask(task:string):number{
    let index = theArray.indexOf(task);
    if(index>-1){
        theArray.splice(index,1);
        console.log("Task " + task + " has been removed from list");
    }else{
        console.log("Task " + task + " is not on the list");
    }
    return theArray.length;
}