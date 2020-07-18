console.log("ahmed")
let osname = prompt("Enter the name of OS and version of OS");
let res = osname.split(" ");
let name = res[0];
let version = res[1];
document.write(`the OS name is ${name} and version is ${version}`)
console.log(`the OS name is ${name} and version is ${version}`);