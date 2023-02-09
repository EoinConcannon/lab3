interface MyInterface {
    Tasks: string[];
    addTask(task:string):number
    listAllTasks():void
    deleteTask(task:string):number
}

class MyTasks implements MyInterface{
    constructor(){

    }

    Tasks:string[] = [];
    addTask(task:string):number{
        this.Tasks.push(task);
        console.log("Task item " + task + " has been added to your list");
        return this.Tasks.length;
    }

    listAllTasks(): void {
        this.Tasks.forEach((item)=>{
            console.log("Task " + item + " is in our list.");
        })
    }

    deleteTask(task: string): number {
        let index = this.Tasks.indexOf(task);
        if(index>-1){
            this.Tasks.splice(index,1);
            console.log("Task " + task + " has been removed from list");
        }else{
            console.log("Task " + task + " is not on the list");
        }
        return this.Tasks.length;
    }

}

let myTasks = new MyTasks();
myTasks.addTask("Test");
myTasks.addTask("func");
myTasks.listAllTasks();
myTasks.deleteTask("Test");
myTasks.listAllTasks();