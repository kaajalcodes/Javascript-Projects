
function totalOfOddNumbers(){
    let startingrange = document.getElementById("starting_range").value;
    let endingrange = document.getElementById("ending_range").value;
    //let oddNumbers = "<br> Output: <br>";
    let total = 0;

  for (let i = startingrange; i<=endingrange; i++){
    if (i % 2 !=0){
    //oddNumbers += i + " , ";
    //total += i;
    total++;
}
}
//document.getElementById("result").innerHTML = oddNumbers;
document.getElementById("result").innerHTML = total;
}














