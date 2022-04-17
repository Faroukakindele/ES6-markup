let userArray = process.argv.slice(2);
let [,userName,userEmail] = userArray 
console.log(`{ username: '${userName}', email: \'${userEmail}' }`)
