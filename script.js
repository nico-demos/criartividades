
function sendMail() {
    document.getElementById("messageSend").innerText = ""
    let params = {
        email: document.getElementById("email").value
    }

    const serviceID = "service_na1lapi";
    const templateID = "template_q4prllu";
    
    if (params.email) {
        toggleLoader();
        emailjs.send(serviceID, templateID, params)
        .then(() => {
            document.getElementById("email").value = "";
            document.getElementById("messageSend").innerText = "Email enviado com sucesso!"
            })
        .catch(() => {
            toggleLoader();
            document.getElementById("messageSend").innerText = "Houve um erro inesperado tente novamente mais tarde!"
        })
    } else {
        document.getElementById("messageSend").innerText = "Preencha todos os campos!"
    }
}

// exibir ou retirar loader
function toggleLoader() {
    let loaderElement = document.getElementById("loader");

    loaderElement.classList.toggle("hide");
}

