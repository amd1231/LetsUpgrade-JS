console.log("ahmed");
let num = prompt("Enter the number");
let i;
let j;
let count;
for(i = 2;i <= num; i++)
{
    count=0;
    for(j = 1;j <= i; j++)
    {
        if(i % j == 0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        console.log("The prime numbers are",+i);
        document.write("The prime numbers are ",+i);
    }
}