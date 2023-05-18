// -------------------------------------------------------------------menu-----------------------------------------------------------------------
"use strict"

// document.getElementById('getStarted').addEventListener('click', function (event) {
//     event.preventDefault();
//     validateForm();
// });

// function validateForm() {
//     const firstNameInput = document.getElementById('first-name');
//     const lastNameInput = document.getElementById('last-name');
//     const phoneNumberInput = document.getElementById('phone-number');
//     const nameError = document.getElementById('name-error');
//     const phoneError = document.getElementById('phone-error');

//     const firstName = firstNameInput.value.trim();
//     const lastName = lastNameInput.value.trim();
//     const phoneNumber = phoneNumberInput.value.trim();

//     let hasErrors = false;

//     // Reset error messages
//     nameError.style.display = 'none';
//     phoneError.style.display = 'none';

//     if (firstName === '') {
//         firstNameInput.classList.add('error');
//         nameError.style.display = 'block';
//         hasErrors = true;
//     } else {
//         firstNameInput.classList.remove('error');
//     }

//     if (lastName === '') {
//         lastNameInput.classList.add('error');
//         nameError.style.display = 'block';
//         hasErrors = true;
//     } else {
//         lastNameInput.classList.remove('error');
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//         phoneNumberInput.classList.add('error');
//         phoneError.style.display = 'block';
//         hasErrors = true;
//     } else {
//         phoneNumberInput.classList.remove('error');
//     }

//     if (!hasErrors) {
//         // Proceed with form submission or other actions
//         console.log('Form submitted successfully');
//     }
// }

// function validatePhoneNumber(phoneNumber) {
//     // Regular expression for a valid phone number format
//     const phoneRegex = /^\d{10}$/;

//     return phoneRegex.test(phoneNumber);
// }


const burger = document.getElementById("burger")
const menu = document.querySelector(".mobile_menu")
const men_link = document.getElementsByClassName("menu_link")
const mob_men_link = document.getElementsByClassName("mobile_menu_link")

burger.addEventListener("click", function () {

    this.classList.toggle("rotateZ")
    menu.classList.toggle("transformY")
})

for (let i = 0; i < men_link.length; i++) {
    men_link[i].addEventListener("click", function () {

        for (let link of men_link) {
            link.classList.remove("active")
        }

        this.classList.add("active")
    })
}

for (let i = 0; i < mob_men_link.length; i++) {
    mob_men_link[i].addEventListener("click", function () {

        men_link.classList.toggle("transformY")
        burger.classList.remove("rotateZ")

    })
}

// ------------------------------------------------------------------------------tabs--------------------------------------------------------------------
function openTab(evt, TabFunction) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab_cont");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(TabFunction).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("register").style.display = "flex";
document.getElementById("tab").classList.toggle("active");


//   SWIPER SKAIDRES
const swiper1 = new Swiper('.swiper1', {

    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination1',
    },

    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1155: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
    },
});