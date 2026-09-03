//start
//menu
//enter your order1
//find your choix
//if want anther order yes >> choix
//if your amount or total >= 200dh then you win 10% for sale
//else pay 200dh
//result = 
/*
Choix : 1
Quantité : 4

Plat : Pizza
Prix unitaire : 60 DH
Sous-total : 240 DH
Réduction : 24 DH
Total à payer : 216 DH
*/

const prompt = require('prompt-sync')();
//console.log("Please select your order :");
console.log("1: Pizza  → 60 DH\n2: Burger → 45 DH\n3: Tacos  → 40 DH\n4: Salade → 30 DH");
let choix = +prompt('Please select your order : ');
let quantite = +prompt('enter quantite: ');
let plat;
let reduction;
let prix;
let sous_total;
let total_pay;
console.log("########################## Order ############################");

console.log("choix : ",choix);
console.log("Quantité : ",quantite)



switch (choix) {
    case 1:
        prix = 60;
        sous_total = prix * quantite; 
        console.log("Prix de plat: ",prix + " DH");
        console.log("Plat: Pizza");
        
        
        break;
    case 2:
        prix = 45;
        sous_total = prix * quantite; 
        console.log("Prix de plat: ",prix + " DH");
        console.log("Plat: Burger");
        break;
    case 3:
        prix = 40;
        sous_total = prix * quantite; 
        console.log("Prix de plat: ",prix + " DH");
        console.log("Plat: Tacos");
        break;
    case 4:
        prix = 30;
        sous_total = prix * quantite; 
        console.log("Prix de plat: ",prix + " DH");
        console.log("Plat: Salade");
        break;
}
reduction = sous_total * 0.10;
total_pay = sous_total - reduction;

if (sous_total >= 200)
{
    console.log("Sous-total :", sous_total + " DH");
    
    console.log("Réduction : ",reduction + " DH");
    console.log("Total final: ",total_pay + " DH");
    
}
else
    console.log("Total: ",sous_total + " DH");
    

console.log("......-------------------------------------------......");

