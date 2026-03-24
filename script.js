let main = document.querySelector(".container");
let input = document.getElementById("nameInput");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let name = input.value;
    if (name !== "Gadhi") {
        alert("गधी जो बुलाता हूँ वो नाम डालो ।");
    } else {
        alert("मुझसे शादी करोगी ?");
        main.style.backgroundColor = "pink";
        main.style.display = "none";
    }
});
