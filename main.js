// PARALLAX EFFECT
const parallax_home = document.getElementById("home");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    home.style.backgroundPositionY = offset * 0.7 + "px";

});

//CONTACT ME
var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var body = 'Name:' +name +'<br/> email: ' +email + '<br/> Message: ' +message;

    Email.send({
        SecureToken : "e2efcd08-10e7-4a28-9c07-a97f3b865a7c",
        To : 'celestecarljean17@gmail.com',
        Subject: "From Website",
        From : email,
        Body : body
    }).then(
      message => alert(message)
    );
});