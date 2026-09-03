const prompt = require('prompt-sync')();
let cond = prompt('Please enter your Age: ');

if (cond >= 18)
{
    console.log("Âge : ",cond);
    console.log("Accès autorisé");  
}
else
    console.log("Accès refusé");