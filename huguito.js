let ronda1 = [];
let ronda2 = [];
let ronda3 = [];

const num = 7;

function operacionesBasicas (operando) {
  r1 = operando * num;
  r2 = operando / num;
  r3 = operando + num;
  r4 = operando - num;
  return [r1, r2, r3, r4];
}

ronda1= operacionesBasicas(7);
console.log(`ronda1= ${ronda1}`);
for (let a=0; a < (ronda1.length); a++){
  ronda2= [...ronda2, ...operacionesBasicas(ronda1[a])];
  console.log(`${ronda1[a]} */+- 5= ${operacionesBasicas(ronda1[a])}`);
}
console.log(`Resultados de la Ronda2 = ${ronda2}`);
for(let b=0; b < ronda2.length; b++){
  ronda3= [...ronda3, ...operacionesBasicas(ronda2[b])];
  console.log(`${ronda2[b]} */+- 5= ${operacionesBasicas(ronda2[b])}`);
}

console.log(`Resultados Ronda Final= ${ronda3}`);

const resultado = ronda3.includes(42) ?'Objetivo encontrado':'Viejo taimado';
console.log(resultado);