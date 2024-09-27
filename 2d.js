// cian dicker-hughes
// g0041513@atu.ie

// a function that multiply each number under 70 by 2, using a .map function
const ages = [25, 31, 42, 77];

let d = ages.map((item)=>{
    if(item < 70){
        return item * 2;
    }
    else{
        return item;
    }
})

console.log(d);