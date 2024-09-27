// cian dicker-hughes
// g0041513@atu.ie

// 3.a
// arrar for strings
let TaskList = [];

// 3.b
// add task to the arrar and reture teh lenght
let addTask = (task)=>{
    TaskList.push(task);
    console.log(task +" + has been added to my TaskList ");
    return TaskList.length;
}

// 3.c
// loops over the array item in the console
let listAllTasks =()=>{
    console.log();

        TaskList.forEach((item)=>{
            console.log(item);
    })
    console.log();
}

// 3.d
// delete task from array
let deleteTask = (task)=>{
    let index = TaskList.indexOf(task);
    if(index > -1){
        TaskList.splice(index, 1);
        console.log(task +" + has been remove to my TaskList");
    }
    else {
        console.log(task +" is not in the my TaskList");
    }
    return TaskList.length;


}

addTask("Work");
addTask("Eat");
addTask("Sleep");
listAllTasks();
deleteTask("Work");
deleteTask("aslkdjgasl");
listAllTasks();
