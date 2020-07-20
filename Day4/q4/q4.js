console.log("ahmed")
let a = Number(prompt("enter first number."));
console.log(`Entered number is ${a}`);
let b = Number(prompt("enter second number"));
console.log(`Entered number is ${b}`);
let ch = Number(prompt("enter your choice"));
console.log(`Your choice is ${ch}`);
let c;
do
{
    switch(ch)
    {
    case 1:
        c = a + b;
        console.log(`Addition is ${c}`);
        break;
    case 2:
        c = a - b;
        console.log(`Substraction is ${c}`);
        break;
    case 3:
        c = a * b; 
        console.log(`Multiplication is ${c}`);
        break;
    case 4:
        c = a / b;
        console.log(`Division is ${c}`);
        break;
    case 5:
        c = (100*b)/a;
        console.log(`Percentage is ${c}`);
        break;
    case 6:
        c = Math.sqrt(a);
        console.log(`Square root is ${c}`);
        break;
    default:
        console.log("Wrong choice");
        break;
    }
}while(ch == 9 )

