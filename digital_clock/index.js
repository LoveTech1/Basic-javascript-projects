// for selecting class values
const hr = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");

// for calculating the date and setting an interval of 1000 milliseconds it will call upon itself
function calculate_digital_clock() {
        let date = new Date();
        let currentTimeInHours = String(date.getHours()).padStart(2, "0");
        let currentTimeInMinutes = String(date.getMinutes()).padStart(2, "0");
        let currentTimeInSeconds = String(date.getSeconds()).padStart(2, "0");
        hr.textContent = currentTimeInHours + " :";
        min.textContent = currentTimeInMinutes + " :";
        sec.textContent = currentTimeInSeconds;
        setTimeout(calculate_digital_clock,1000);
    }

calculate_digital_clock();