const prompt = require('prompt-sync')();
let num = prompt('Please enter integer number: ');

if(num > 0)
{
    console.log('Nomber : ',num);
    console.log("Le nombre est positif.");
}
else if(num < 0)
{
    console.log('Nomber : ',num);
    console.log("Le nombre est négatif.");
}
else
{
    console.log('Nomber : ',num);
    console.log("Le nombre est égal à zéro.");
}