// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)

    // animation footer on scroll

}

    // Hire me Button 
    document.getElementById("hire").addEventListener("click", function() {
        const recipient = "panditshadh@gmail.com";
        const subject = "Regarding Job Opportunity";
        const body = "Hi Shardhanand,\n\nI'm interested in discussing a job opportunity with you. \nPlease let me know if you're available to talk.";
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    });


// ---------Contact me ----------
// const form = document.querySwlwctor("form");
// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "panditshadh@gmail.com",
//         Password : "042C5D8DBA9009515A2C970928D3D4024858",
//         To : 'panditshadh@gmail.com',
//         From : "panditshadh@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
// form.addEventListener("submit",(e) =>{
//     e.preventDefault();
    
//     sendEmail();
// })


