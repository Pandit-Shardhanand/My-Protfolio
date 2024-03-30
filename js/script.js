// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    // sticky header


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll

}

const form = document.querySwlwctor("form");
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "panditshadh@gmail.com",
        Password : "042C5D8DBA9009515A2C970928D3D4024858",
        To : 'panditshadh@gmail.com',
        From : "panditshadh@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    sendEmail();
})


