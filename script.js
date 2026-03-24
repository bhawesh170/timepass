let main = document.querySelector(".container");
let input = document.getElementById("nameInput");
let btn = document.querySelector("button");
let body = document.body;

btn.addEventListener("click", function() {
    let name = input.value.trim().toLowerCase();
    if (name === "gadhi") {
        body.style.backgroundImage = "url(ravi.jpg.jpeg)";
        main.style.display = "none";
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result").textContent = "मेरे बेटवा से शादी कर के जल्दी आ जाओ । नहीं तो मैं भी तुम्हें गधी ही बुलाऊँगा ।";
    } else {
        alert("गधी ! जो बुलाता हूँ वो नाम डालो ।");
    }
});
