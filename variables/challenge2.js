const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});

rl.question("Please Enter your budget: ", (MAD) => {
    console.log("Budget en MAD : ",MAD + " DH");
    let EUR = MAD / 11;
    console.log("Budget en EUR : ",EUR + ' €');
    rl.close();
});

