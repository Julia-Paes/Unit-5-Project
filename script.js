let Q1Input = document.querySelector(".Q1Input").value;
let Q2Input = document.querySelector(".Q2Input").value;
let Q3Input = document.querySelector(".Q3Input").value;
let results = document.querySelector(".results");
let result1 = document.querySelector(".soldier");
let result2 = document.querySelector(".poet");
let result3 = document.querySelector(".king");

let submitButton = document.querySelector(".submit");
submitButton.onclick=function(){
    
if ((Q1Input === "an excuse") && (Q2Input === "the guilty") && (Q3Input === "something to be destroyed")) {
    results.style.display="block";
    results.innerHTML = "You are a" +result3+ "!";
    
} else if ((Q1Input === "violence") && (Q2Input === "one of the innocents") && (Q3Input === "right at me")) {
    results.style.display="block";
    results.innerHTML = "You are a" +result2+ "!";
    
} else if ((Q1Input === "straightfoward") && (Q2Input === "my blood") && (Q3Input === "golden and covered in flowers")) {
    results.style.display="block";
    results.innerHTML = "You are a" +result1+ "!";
}
};