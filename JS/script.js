// Telefone
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome)


// TELEFONE
let telefone = document.querySelector("#telefone")
function exibirTelefone(){
    console.log(telefone.value)
    if(telefone.value == ""){
        telefone.style.border = "2px solid red"
    
    }
    else{
        telefone.style.border = "2px solid green"
    }
}
telefone.addEventListener("blur", exibirTelefone)

// WHATSaPP
let WhatsApp = document.querySelector("#WhatsApp")
function exibirWhatsApp(){
    console.log(WhatsApp.value)
    if(WhatsApp.value == ""){
        WhatsApp.style.border = "2px solid red"
    
    }
    else{
        WhatsApp.style.border = "2px solid green"
    }
}
WhatsApp.addEventListener("blur", exibirWhatsApp)





// E-Mail
let email = document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")


email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase()
    confirmar.value = email.value
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.') == -1){
        console.log("Email inválido")
        
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    
    else{
       console.log ("Email válido")
       
       email.classList.add("border-success")
       email.classList.remove("border-danger")
    }
    console.log (email.value.indexOf("@"))
})



// alerta para sair da pagina 
