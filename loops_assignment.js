// print numbers from 20 to 30 while and for loops

// using for loop 

for (let i =20; i<=30; i++){
    console.log (i) // first it prints 20, then 
    // enter into the loop (iteration)
}

// using while loop*/

let i =20;
while (i<=30) {
console.log (i) 
i = i+1
}
    

// print 1 to 10 in reverse example (10, 9, 8, 7......)
// using for loop

for(i=10; i>=1; i--) {
console.log(i) // it first prints 10, then decrement by 1
}

//using while loop

let n =10;
while (n>=1) {
    console.log(n)  // check the condiiton and prints 10, 
    n =n-1  // decrement by 1
}

//find sum of first 5 numbers

//using for loop

let output = 0;
for(let m=1; m<=5; m++){
    output=output + m 
    console.log(output) // if we print the inside of the for block, it prints 
    //out put value each time  stored in the output: 1, 3, 6, 10, 15  
} 

let result = 0;
for (let m=1; m<=5; m++){
    result = result+m
} console.log (output) // it is outside of the for block, so it prints the 
//final sum value // 15 


//using while loop

let m =1;
let output1 = 0; // here we need intialize output1 variable as, each iteration
// it stores the value in this output1 variable 
while(m<=5){
     m = m+1;    // increment first and add later// see out put woud be 20 
     output1 = output1+m
} console.log (output1)  


let j = 1;
let results2 = 0
while (j<=5) {
    results2 = results2+j // add first and then increment   
    j = j+1 
} console.log(results2) // it prints 15


// Print add number from 1 to 20

// using for loop
for (i =1; i<=20; i++) {
   // console.log(i) // it prints 1 to 20 numbers. but we need add number 
 // use the if condition, inside for loop block
 if (i%2 ===1) {
    console.log(i) // it prints all add numbers
 }
     
}

// print odd numbers from 1 to 20

for (i =1; i<=20; i++) {
    if (i%2 === 0) {
        console.log(i) // it prints all even numbers 
    }
}

// print add number from 1 to 20 using while loop

//using while loop
let k =1;
while (k<=20) {
// if i do the increment here when k =20, it increments to 21
// and execute the next condtion
//perform if condition and then increment       
if (k%2 ===1) {
    console.log(k)
} k = k+1
}

// to print all the even numbers from 1 to 20, change the if condition
// to if (k%2 ===0)




// find the sum of even numbers from 1 to 10

// using for loop

let output3 =0;
for(i=0; i<=10; i = i+2) {
//    console.log(i) // this prints all even numbers from 1 to 10 
    output3 = output3 + i
} console.log(output3)

// using while loop


let r =0
output4 =0
while (r<=10) {
    output4 = output4+r
    r = r+2;    
}console.log(output4)


// print 1 to 50 by by skipping 10 multiples (should not print 10,20,30,40,50)

// using for loop

for(i =1; i<=50; i++){
    if (i%10 ===0) {
        continue; //if this condtion is true, it skips that nuber
    } console.log(i)
} 

// using while loop

let i2 =1
while (i2<=50){
if (i2%10 ===0) {
    i2 =i2+1
    continue;
} console.log(i2)

}