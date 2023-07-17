//script.js

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_65b5awi", "template_rhh9254", params).then(function(res) {
        alert("Success! " + res.status);
    })
}



    window.addEventListener('DOMContentLoaded', (event) => {
        // Delay the smooth scroll on specific link click
        const aboutLink = document.querySelector('nav ul li a[href="#about"]');
        if (aboutLink) {
            aboutLink.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = aboutLink.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 150); // Set the delay time in milliseconds
                }
            });
        }
    });
    
