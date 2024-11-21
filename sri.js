// console.log(20)
// var sweetbox="sweet"
// console.log(sweetbox); 
// var a=5
// var a=10
// console.log(a)
// let b=15
//     b=20
//     b=10
// console.log(b)
// const c=25
// console.log(c)
// //primitive datatypes
// var a="surya"
// console.log(a);
// var num=25.5
// console.log(num);
// var bo= true
// console.log(bo);
// let aa=null
// console.log(aa);
// let bb
// console.log(bb);

// //non primitive datatypes
// //array
// var arr=["surya",25,"aravind",20,"raj",12]
// console.log(arr);

// let brr=[2,3,4,6,8,10]
// console.log(brr[3]);
// //object
// var obb={
//    name: "srinath",
//    age: 26,
//    dob:9.12
// }
// console.log(obb);

//functions
//function statement or declaration
// function fun() {
//     console.log("iam srinath");
// }
// fun()
//parameters and arguments
// function fun(a) {
//     console.log(a);
// }
// fun("surya")
//return
// function fun(a) {
//     return a
    
// }
// console.log(fun("birthday party"));

//function expression
// var fn= function birtday(){
//     console.log("surya's birthday");
    
// }
// fn()
//ananymous function= without variable name
// var fn=function(){
//     console.log("srinath's birthday");
// }
// fn()

//arrow function
// var ar=(a)=>{console.log(a);}
// ar("good morning")
//task
// var abc=(a)=>{console.log(a*a)}
// abc(2)

//operators
//arithmetic operators
// var a=10
// var b=10
// console.log(a+b);
// var a=10
// var b=10
// console.log(a-b);
// var a=10
// var b=10
// console.log(a*b);
// var a=10
// var b=5
// console.log(a/b);
// var a=10
// var b=2
// console.log(a%b);
// var a=10
// console.log(a**a);
// var a=10
// a++
// console.log(a);
// var a=10
// a--
// console.log(a);

//assignment operator
// var a =10
// a+=5
// console.log(a);
//assigment operator
//var abc=10
//abc=2  
//console.log(abc);

//logical operator
// var a=10
// var b=10
// console.log(a != b);
 
//comparison operator
// var a=10
// var b=20
// console.log(a<b);
// var a=10
// var b=20
// console.log(a>b);
// var a=10
// var b=20
// console.log(a<=b);
// var a=10
// var b=20
// console.log(a>=b);

//equality operator
// var a=10
// var b="10"
// console.log(a==b);
// var a=10
// var b="10"
// console.log(a===b);

//ternary operator
// var age=10
// var limit=(age>18)? "he is not eligible ":"he is eligible"
// console.log(limit);

//task
// var height= 154
// var limit=(height>=155 && height<=188)?"he is eligble to ride":"he is not eligible to ride"
// console.log(limit);

// var heigh= 154
// var lim=(heigh>=155 || heigh<=188)?"he is eligble to ride":"he is not eligible to ride"
// console.log(lim);

// //looping concept
// for(var a=0;a<=5;a++){
//     console.log(a); 
// }
// var a="java"
// for(var i=0;i<a.length;i++){
//     console.log(a[i]);
// }
//task
// var a="java"
// for(var b=0;b<1;b++){
//     console.log(a);   
// }

//task
// to reverse the string in the same line
// var a="java"
// var b=" "
// for(var i= a.length-1;i>=0;i--){
    
//     b +=a[i]
// }
// console.log(b);

// task 0 to 10 =55
// var a = 0;
// for(var b = 0; b <= 10; b++){
//     a+= b;
// }
// console.log(a);






// console.log(sum);

//for methods
//for each
// var weeks=["monday","tuesday","wednesday","thursday","friday"]
// weeks.forEach(val,ind,accarr => {console.log(val,ind,accarr);

    
// });

// //for in
// var obj={
//     name:"srinath",
//     dep:"it"
// }
// for(var x in obj){
//     console.log(x+"<=>"+obj[x]);
    
// }

//for of 
// let str ="happy"
// for(var x of str){
//     console.log(x);
    
// }

//while

// var count=0
// while (count<5) {
//     console.log(count);
//     count++
// }


//task decending order

// var a=5
// var b
// while (a>0) {
//     console.log(a);
//     a--
// }

// // do-while

// var count=0
// do{
//     console.log(count);
//     count++
// }while(count<5)


//task
// var obj={
//     name : "surya",
//     dep : "safety"
// }
// for(var x in obj){
     
//     console.log(x+"<=>"+obj[x]);
    
// }


//array methods 
//push

// var bill=["jai","sai","ram","hari"]
// bill.push("sam")
// console.log(bill);

// //pop
// bill.pop()
// console.log(bill);

//unshift

// var app=["a","v","a"]
// app.unshift("j")
// console.log(app);

// //shift
// app.shift()
// console.log(app);

//concat

// var fr=["apple","orange","pineapple"]
// var veg=["brinjal","cucumber","beans"]
// var cos=["powder","lipstrick"]
// var cover=fr.concat(veg,cos)
// console.log(cover);

// sort

// const arr=[3,4,5,6,8,9,1,0,2,7]
// arr.sort((a,b)=>a-b);
// console.log(arr);

//split

// var s="madhu srinth"
// var a=s.split(" ")
// console.log(a);

// // join

// var c=a.join(" ")
// console.log(c);

//reverse

// var a="annanagar"
// var b=a.split("").reverse().join("")
// console.log(b);


// slice
// let bird=["parrot","peacock","pigeon","eagle",]
// let s=bird.slice(1,3)
// console.log(s);

// splice

// let weeks=["sun","mon","tue","wed","fri"]
// weeks.splice(4,0,"thu")
// console.log(weeks);
//  weeks.splice(6,0,"sat")
// console.log(weeks);

//string methods 
//includes
// var a="sridharansurya"
// var b=a.includes("surya")
// console.log(b);

//touppercase
// var up="sridharansurya"
// console.log(up.toUpperCase());
// //to lowercase
// console.log(up.toLowerCase());

// //index of: it will take the first accurance of the duplicate value
// var idx="surya"
// console.log(idx.indexOf("y"));

// // last indexoff

// var app="madhu srinath"
// console.log(app.lastIndexOf("a"));

// //length: to check the length of the string

// var len="sridharnsurya"
// console.log(len.length);

// //charat: to get the specific character based on the indices

// var char="sridharansurya"
// console.log(char.charAt(3));

// // replace
// var rep="sridharan surya"
// console.log(rep.replace("sridharan","srinath"));

// //repeat
// var repe="surya"
// console.log(repe.repeat(5));

// // startswith
// var strw="Sridharansurya"
// console.log(strw.startsWith("s"));

// //endswith
// var endw="sridharansurya"
// console.log(endw.endsWith("a"));

// // if-else
// let age=20
// if (age>=18) {
//     console.log("he is eligible");
// }else{
//     console.log("he is not eligible");
    
// }

// //else-if 

// let mark=49

// if (mark>=90&&mark<=100) {
//     console.log("grade A");
// }else if (mark >=80) {
//     console.log("grade B");  
// }else if (mark>=70) {
//     console.log("grade C");
// }else if (mark>=60) {
//     console.log("grade D");
// }else if (mark>=50) {
//     console.log("grade E");
// }else{
//     console.log("fail");
    
// }

// Object
// var obj={
//     name:"jai",
//     age:20
// }
// console.log(obj);

// //to update the value
// obj.name="aravind"
// obj.age=23
// console.log(obj);

// //to get the the value of the obj
// console.log(obj.name);
// console.log(obj.age);

// nested array and object

// var scl=[{
//     name:"surya",
//     gender:"male",
//     age:28
// },{
//     name:"srinath",
//     gender:"male",
//     age:25
// },{
//     name:"sridharraj",
//     gender:"male",
//     age:22
// },{
//     name:"saravind",
//     gender:"male",
//     age:24
// },{
//     name:"prem",
//     gender:"male",
//     age:26
// },

// ]
// console.log(scl[2]);

//collection of key and values pair


// var sch=[{
//     name:"surya",
//     gender:"male",
//     age:28
// },{
//     name:"srinath",
//     gender:"male",
//     age:25
// },{
//     name:"sridharraj",
//     gender:"male",
//     age:22
// },{
//     name:"saravind",
//     gender:"male",
//     age:24
// },{
//     name:"prem",
//     gender:"male",
//     age:26
// },

// ]

// let keys=Object.keys(sch[1])
// console.log(keys);

// let val=Object.values(sch[2])
// console.log(val);

//object destructuring

// var obje={
//     name :"surya",
//     age:20,
//     dep:"it"
// }

// let {name,age,dep}=obje
// console.log(name,age);

//set timeout function

// setTimeout(() => {
//     console.log("surya is my brother");
    
    
// }, 5000);


//else if task


// var auto=8

// if (auto>=8) {
//     console.log("auto will move");
// }else if(auto<=8){
//     console.log("auto will wait the passenger");

// }else{
//     console.log("auto will drop for the passenger");
    
// }

// var obj={

//     name:"jai",
//     age:20
// }


// let key=Object.keys(obj)
// console.log(key);

// let val=Object.values(obj)
// setTimeout(()=>{
//     console.log(val);
    
// },3000)







    
    

















