var myName = "Paolo";
var paragraph = document.getElementById("paragraph")

console.log(paragraph.className)

paragraph.textContent = myName;
paragraph.className = "aaabbbccc";

console.log(paragraph.className)

function calcolaArea(base, altezza){
    var area = base * altezza;

    alert("sono nella funzione")

    return area;
}
    var areaCalcolata = calcolaArea(5,3);

    console.log(areaCalcolata)


