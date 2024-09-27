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

addTask("Work");

// 3.c
// loops over the array item in the console
TaskList.forEach((item)=>{
    console.log(item);
})


