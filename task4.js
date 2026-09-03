const prompt = require("prompt-sync")();
let montant = +prompt("Please enter your Amount: ");

if(montant >= 500)
{
    console.log("***********************************************"); 
    console.log("Montant de la commande : ",montant + "DH");
    console.log("Livraison : Gratuite");
    console.log("Total à payer : ",montant + "DH");
    console.log("***********************************************");
}
else
{
    console.log("***********************************************");
    console.log("Montant de la commande : ",montant +"DH");
    console.log("Livraison : 40 DH");
    console.log("Total à payer : ",montant + 40 + "DH");
    console.log("***********************************************");
}
