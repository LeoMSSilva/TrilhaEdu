var buttonRef = document.querySelector('#submit')

function validar() {

    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;


    if (password === "123")
        window.location.href = "./login_Valido.html";
    else
        alert("Login incorreto!");
}

buttonRef.addEventListener('click', prevent)

function prevent(event) {
    event.preventDefault();
}