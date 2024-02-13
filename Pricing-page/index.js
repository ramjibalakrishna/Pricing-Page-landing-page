const plansSwitch = document.querySelector("#toggle .check");
const freePrice = document.querySelector(".price-free");
const standardPrice = document.querySelector(".price-standard");
const elitePrice = document.querySelector(".price-elite");
const Duration = document.querySelectorAll(".duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        freePrice.innerText = "$ 0";
        standardPrice.innerText = "$ 1999";
        elitePrice.innerText = "$5999";
        Duration.forEach(span => {
            span.innerText = "/ year";
      
        })
    } else {
        freePrice.innerText = "$ 0";
        standardPrice.innerText = "$ 99";
        elitePrice.innerText = "$200";
        Duration.forEach(span => {
            span.innerText = "/ month";
     
        })
    }
})