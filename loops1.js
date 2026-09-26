
// skip the 20 number multiples (20, 40, 60, 80, 100) 


for (let o = 1; o <= 100; o++) {
    if (o % 20 === 0) {
        continue;
    } console.log(o)
}

