let arr = ["blue","orange","green","black"];
let i = 0;
function change()
{
    let color = arr[i++];
    document.body.style.backgroundColor = color;
}
setInterval(change,3000);