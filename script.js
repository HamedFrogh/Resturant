// Reservation page
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservationForm");
    const daySelect = document.getElementById("daySelect");
    const hourSelect = document.getElementById("hourSelect");

    // Example of JS object with properties
    const reservationDetails = {
        day: "",
        hour: "",
        fullName: "",
        phoneNumber: "",
        personsCount: 0,
    };

    // Event listeners for form elements
    daySelect.addEventListener("change", function () {
        reservationDetails.day = daySelect.value;
    });

    hourSelect.addEventListener("change", function () {
        reservationDetails.hour = hourSelect.value;
    });

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for now
        reservationDetails.fullName = document.getElementById("fullName").value;
        reservationDetails.phoneNumber = document.getElementById("phoneNumber").value;
        reservationDetails.personsCount = document.getElementById("personsCount").value;

        // You can use the reservationDetails object as needed (e.g., send to server, display confirmation)
        console.log(reservationDetails);
    });

    // Example of using click, mouseover, and keypress events
    const submitButton = document.querySelector("input[type='submit']");
    submitButton.addEventListener("click", function () {
        alert("Submit button clicked!");
    });

    reservationForm.addEventListener("mouseover", function () {
        console.log("Mouse over form!");
    });

    document.addEventListener("keypress", function (event) {
        console.log("Key pressed:", event.key);
    });

    // Example of creating a simple animation using JS
    const banner = document.querySelector(".banner");
    banner.addEventListener("click", function () {
        banner.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});






const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');






searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

// sound

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundAudio");
    
});




