const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});
rl.question('Please Enter your stockage: ', (GB) => {
    console.log("Stockage : ",GB + " GB");
    let MB = GB * 1024
    console.log("Résultat : ",MB + " MB")
    rl.close();
});
