const email_button = document.getElementById("send");
const span = document.getElementById("send_to");
const newsletter = document.getElementById("newsletter");
const close = document.getElementById("close");

email_button.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    if (email != "") {
        span.innerHTML = email;
        newsletter.style.display = 'flex';
    }
});

close.addEventListener("click", function() {
    newsletter.style.display = 'none';
});