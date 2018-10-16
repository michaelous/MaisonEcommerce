var button = document.getElementById("send");
var span = document.getElementById("here");
var newsletter = document.getElementById("newsletter");
var close = document.getElementById("close");

button.addEventListener("click", function(){
  var email = document.getElementById("email").value;
  if(email != ""){
    span.innerHTML = email;
    newsletter.style.display = 'flex';
  }
});

close.addEventListener("click", function(){
  newsletter.style.display = 'none';
});
