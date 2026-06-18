let notas = [7, 8, 6, 4, 7, 6, 1, 10];

console.log("A nota da primeira posição: ", notas[0]);
console.log("A nota da quarta posição: ", notas[3]);
console.log("A nota da penúltima posição: ", notas[notas.length - 2]);

notas.push(9999);
notas.push(120);
notas.push(3);

notas[0] = null;

notas.unshift(10);
notas.unshift(10);
notas.unshift(10);

notas[0] = 11111;

console.log("O array atualmente possui " + notas.length + " elementos");

console.log("O ultimo elemento é ", notas [notas.length - 1])

console.log(notas.join(", "))

console.log(notas.slice(0,3))
for (let nota of notas) {
    console.log("notas: " + nota);
}

