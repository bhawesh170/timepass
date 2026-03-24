let main = document.querySelector(".container");
let input = document.getElementById("nameInput");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let name = input.value;
    if (name !== "gadhi") {
        alert("गधी ! जो बुलाता हूँ वो नाम डालो ।");
    } else {
        main.style.display = "none";
        main.style.background = url("ravi.jpg");
        alert("मुझसे शादी करोगी ?");
    }
});
