const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout, 
});
rl.question("Enter parcourue en kilomètres: ", (distance) => {
    
    rl.question("Enter La quantité de carburant consommée en litres: ", (carburant) => {
        let consommation = (carburant / distance) * 100;
        console.log("Distance : ",distance + " km");
        console.log("Carburant : ",carburant + " litres");
        console.log("Consommation :",parseInt(consommation) + " L/100km");
        rl.close();      
    })
    
}) 

