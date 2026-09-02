var prompt = require('prompt-sync')();
var Duree = prompt('la durée du film (minutes): ');

if(Duree <= 60)
{
    console.log("Durée : ",Duree + "minutes");
    console.log("Catégorie  : Court métrage");
}
else if(Duree >= 60 || Duree <= 120)
{
    console.log("Durée : ",Duree + "minutes");
    console.log("Catégorie  : Film standard");
}
else
{
    console.log("Durée : ",Duree + "minutes");
    console.log("Catégorie  : Film long");
}
    