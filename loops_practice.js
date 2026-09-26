/*
lets assume i wnat to print till 100
conole.log (1)
console.log(2)
console.log (3)
--
--
we need to wrote 100 lines of code, so waste of time

if we wnat to run the block of code for multiple times, use loop

    {

    }

so we do not need to write 100 lines of code to print 100 number
see below example of loop
*/

for (let i = 1; i <= 100; i++) {
    console.log(i)
}
//

/*
Loops:

1) For loop
2) while loop
3) do while loop

javascript loops
4) for of 
5) for in


*/

//syntax for "for loop"

//for (){
//line 1
//line 2
//}

/*
for (intialization;condtion;increment/decrement/update) {
   line 1
   line2
}

intialization: execute only once
condition: checks everytime
increament/decrement/update: checks everytime  


*/


// print 10 number
//which 10 numbers ? from where to where : is 1 to 10 or 30-40 or 50-60 
//lets say i want to print 60-70 

for (let i = 60; i <= 70; i++) {
    console.log(i)
}

//print the even number from 1-30

// we can do in twoways

// we can do the incremnet by 2: i = i+2

for (let i = 0; i <= 30; i = i + 2) {
    console.log(i)
}

//second way

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


// sum of first 10 numbers

let n = 3
let output = 0

for (let i = 1; i <= 3; i++) {
    output = output + i;
}
console.log(output)

//while --let see the syntax for while

/*
 intialization
 while (condition) {

 increment and decrement will go inside while


}

*/
//print 1-10 numbers using while loop 

let i = 1;
while (i <= 10) {
    console.log(i)
    i = i + 1
}

let j = 1
while (j <= 10) {
    j = j + 1
}
console.log(j)





/* do while: syntax for the do while loop 

do {

} while (condition)

*/

let num = 50;
while (num > 50) {
    console.log(num) // it check the condtion. if it true then execute. if it false then do not execute 
    // so it is false, do not execute
}


let num1 = 50

do {                  // it execute first, then it checks condition           
    console.log(num1)
} // it prints 50
while (num1 > 50)


// How to break the loop

//if we want to breal the loop, use if "condition followed by the break"

let k = 1
while (k <= 100) {
    console.log(k) // here it prints 1-100 numbers
    k = k + 1
}
// if we wnat to print only 10 and break the loop

let k1 =1
while (k1<=100){
    console.log(k1) // here it prints 1-9 numbers, for printing 10 numbers k1<=10 
    k1 = k1+1
    if (k1==10) {
        break;
    }
}
// in the above code, we break the loop 
// for example see the for loop

for (let i =1; i<=10; i++) {
    console.log (i)
}  // output would be 1, 2,3,4,5,6,7,8,9 10


// in the above case i do not want to print number 6
//1,2,3,4,5,7,8,9,10

for (let l=1; l <=10; l++){
    if (l!==6) // l is not equal to 6. so if block skipped
        console.log(l) // output 1,2,3,4,5,7,8,9,10
        console.log ("hello")
}

for (let n=1; n<=10; n++) {
    if (n===6) {
        continue;
    } // n is equal to 6, continue ---rest of the current iteratrion is skipped  
    console.log (n)
    console.log ('hello') 
  
}

// see what happens if use the 'break' instead 'continue'

for(p =1; p<=10; p++) {
    if (p===6) {
        break;
    }
    console.log (p)
    console.log ("hell i am")
}