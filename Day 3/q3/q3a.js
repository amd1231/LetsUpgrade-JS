console.log("ahmed")
let marks = prompt("Enter the marks:")
console.log(marks)
let grades
switch(true)
{
    case (marks > "90"):
        grades = "A";
        console.log(`Marks are ${marks} and grades are ${grades}`)
        break;
    
    case (marks > 80):
        grades = "B";
        console.log(`Marks are ${marks} and grades are ${grades}`)
        break;
    
    case (marks > 70):
        grades = "C";
        console.log(`Marks are ${marks} and grades are ${grades}`)
        break;

    case (marks > 60):
        grades = "D";
        console.log(`Marks are ${marks} and grades are ${grades}`)
        break;
    
    default: 
        grades = "fail"
        console.log(`Marks are ${marks} and grades are ${grades}`)
        break;

}
