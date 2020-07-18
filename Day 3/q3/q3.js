console.log("ahmed")
let mark = prompt("Enter the marks")
console.log(mark)
let grade;
if (mark > 90)
{
    grade = "A"
}
else if(mark > 80)
{
    grade = "B"
}
else if(mark > 70)
{
    grade = "C"
}
else if(mark > 60)
{
    grade = "D"
}
else if(mark > 50)
{
    grade = "E"
}
else
{
    grade = "failed"
}
document.write(`Marks are ${mark} and grade is ${grade}`)
console.log(`Marks are ${mark} and grade is ${grade}`)