let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"
let comando = `Você é um designer web premiado e Programador. 
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

                    Regras de resposta:
                    - Responda SOMENTE com HTML e CSS puros
                    - Não use crases, markdown ou explicações
                    - Não use tags <img>

                    Identidade visual (capriche e surpreenda):
                    - Invente uma paleta de cores única que combine com a essência do negócio
                    - Escolha uma Google Font marcante via @import
                    - Use emojis grandes no lugar de imagens
                    - Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

                    Estrutura da página:
                    - Header com nome do negócio e menu
                    - Hero impactante com título, subtítulo e botão CTA
                    - Seção de diferenciais com emojis
                    - Depoimento de cliente
                    - Footer com contato

Todo o conteúdo em português, criativo e específico para o negócio.`

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
                    "content" : "Você é um programador. Você recebe uma tema de negócio e cria uma landing page com HTML e CSS. Responda apenas com código. A página é em português do Brasil. Use cores que tragam harmonia e instiguem o usúario. Use fontes de texto que combinem com o layout da página. Se baseie em abordagens modernas"
                    
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