let tabela = document.querySelector("#tabela")

// async é uma forma que o JS tem de transformar uma função sincrona em assincrona, muit utilizada em APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url) // fecth irá fazer uma busca na url passada como parâmetro
    const dados = await resultado.json() // estamoos convertendo todos os dados que estão vindo da api no formato json

    //console.log(dados)
    for (const item of dados) {
        //console.log(item.email)

        //CRIANDOO ELEMENTOS HTML
        const img = document.createElement("img")
        const titulo = document.createElement("h1")
        const descricao = document.createElement("h2")
        //CRIANDO CONTEUDO NAS COLUNAS
        img.textContent = item.url
        titulo.textContent = item.title
        descricao.textContent = item.description
        

        //ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(img)
        linha.appendChild(titulo)
        linha.appendChild(descricao)
        
        
        tabela.appendChild(linha)

    }
}
carregarDados()