let inputs = process.argv.slice(2);
let result = inputs
    .map(item => item.charAt(0))
    .reduce((x,y) => x + y);
 console.log(`[${inputs}] becomes "${result}"`)   

 