let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7 

let temp = b;
b = a;
a = temp;

[a,b] = [b,a]

console.log(a);
console.log(b);