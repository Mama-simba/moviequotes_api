


let button = document.querySelector("button");
button.addEventListener("click", generateQuote);


function generateQuote(event) {

    fetch("https://moviequotesgenerator.herokuapp.com/quote")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let quote = document.getElementById("quote").innerHTML = data.quote;
        let movie = document.getElementById("movie").innerHTML = data.movie;
        let bgimage = document.querySelector("body").style.backgroundImage = 'url(' + data.image + ')'; 
    });

   


    
   
    
 
}


    
