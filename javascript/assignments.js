//Write a JavaScript conditional statement to find the largest of five numbers.

a=12;
b=-4;
c=22;
d=1;
e=9;
 if(a>b && a>c && a>d && a>e){
    console.log(a);
 }
 else if(b>a && b>c && b>d && b>e){
    console.log(b);
 }
 else if(c>a && c>b && c>d && c>e){
    console.log(c);
 }
 else if(d>a && d>b && d>c && d>e){
    console.log(d);
 }
 else {
    console.log(e);
 }


 // Write a JavaScript program to remove duplicate items from an array.

 let arr1 = ["Hello","Hi","Hello","Happy Wednesday","GM","Hi"];

 function remDuplicates(arr1){
    let newArr = arr1.reduce(function (accum,curr){
        if(!accum.includes(curr))
            accum.push(curr);
        return accum;
    }, []);
    return  newArr;
 }
 console.log(remDuplicates(arr1));

 //Write a JavaScript function to return an array of the unique elements(not common) between two arrays.

function getNewArray(arr2,arr3){
     let arr =arr2.concat(arr3);
     let uniqArray=[];

     for(let i of arr){
        if(uniqArray.indexOf(i) === -1){
           uniqArray.push(i);
        }
     }
     console.log(uniqArray);
}
 const arr2 = [1,4,"hi","hello"];
 const arr3 = ["great",1,4];
 getNewArray(arr2,arr3);


 //Write a JavaScript program to sort array of strings in ascending order

 let numbers = [5,7,2,89,22,45,10,9];
 numbers.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
 });
 console.log(numbers);
 
 //Write a JavaScript program to sort array of strings in descending order

let numbers1 = [5,7,2,89,22,45,10,9];
 numbers1.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
 });
 console.log(numbers1);
 
 //Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy.

 const date = new Date();

 let day = date.getDate();
 let month = date.getMonth() +1;
 let year = date.getFullYear();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();

 let currentDateTime = `${month}/${day}/${year} | ${hours}hr:${minutes}min:${seconds}sec`;
 console.log(currentDateTime);


 //Write a JavaScript program to list the properties of a JavaScript object?
    function person(name,age,gender,email,place){
        this.name=name,
        this.age=age,
        this.gender=gender,
        this.email=email,
        this.place=place
}

 let person1 =new person("Soujanya",23,"Female","skk@gmail.com,banglore");
 let person2 =new person("Sneha",24,"Female","snn@gmail.com","Mysore"); 

 console.log(person1 , person2);
