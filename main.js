// 5. Design a method to return how many perfect numbers are there in the array.

let a = [6,34,28,45,496,576,8128,54];
let c = 0;

for (i=0;i<a.length;i++) {
    let b = 0;
    for (j=1;j<a[i];j++) {
        if (a[i] % j == 0) {
            b += j;
        }
    }
    if (b == a[i]) {
        c++;
    }
}
console.log(c);