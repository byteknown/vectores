let cadena = [];
let random;
let random2;
let number;
let number2;

for(let i=0;i<10;i++)
{
    cadena.push("X");
}

console.log(cadena);


random = Math.floor((Math.random()*(10-1+1))+1);
cadena.fill("O", random-1, random);
do{
    random2 = Math.floor((Math.random()*(10-1+1))+1);
}while(random2 == random);
cadena.fill("O", random2-1, random2);

console.log(random);
console.log(random2);
console.log(cadena);

for(let i=0;i<5;i++)
{
    number = parseInt(prompt("Introduzca un numero del 1 al 10"));
    number2 = parseInt(prompt("Introduzca otro numero del 1 al 10"));
    if(number==random && number2 == random2 || number==random2 && number2==random)
    {
        console.log("Has ganado");
        break;
    }
    else console.log("Te quedan: " , 4-i, " intentos");
    if(i==4)
    {
        console.log("Has perdido");
    }
}
