let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarCodigo() {
    let textarea = document.querySelector(".prompt").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": textarea
                },{
                    "role" : "system",
                    "content" : "Você é um programador. Você recebe uma tema de negócio e cria uma landing page com HTML e CSS. Responda apenas com código. A página é em português do Brasil"
                    
                }
            ],
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content
    let espacoCodigo = document.querySelector(".bloco-codigo")
    let espacoSite = document.querySelector(".bloco-site")
    espacoCodigo.textContent = resultado
    espacoSite.srcdoc = resultado
    console.log(resultado)
}