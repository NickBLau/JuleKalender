//hvad dato er det
let date = new Date;
let currentDay = date.getDate() //Idag er den = 10
let currentMonth = date.getMonth()+1 //Idag er den = 10
//Denne variabel skal ændres til 12 når vi er færdige med at udvikle
const activationMonth = 10
console.log(currentDay);
console.log(currentMonth);



// Vi indsamler alle kalenderlåger i en liste
const items = document.querySelectorAll(".item")

//Vi deklarer et tomt array der holder styr på om låger er åbne
let openOrClosed = []

//Her kommer noget local storage

if(localStorage.days){
    openOrClosed = JSON.parse(localStorage.getItem("days"));
}


//LOOP
items.forEach(function(element, index){
    element.addEventListener("click", clickHandler)
    if(openOrClosed[index] == true){
        element.classList.add("open")
    }
})

//Deklaration af clickHandler funktion
function clickHandler(event){
 if(currentDay >= this.dataset.date && currentMonth ==activationMonth  ){

        if(this.classList.contains ("open")){
            this.classList.remove("open")
            openOrClosed[this.dataset.date-1] = false
        }
        else{
            this.classList.add("open")
            openOrClosed[this.dataset.date-1] = true
        }
        localStorage.setItem("days", JSON.stringify(openOrClosed))
    }
     else(
         alert("Hov du må ikke åbne endnu")
     )
 }