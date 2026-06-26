let chave = "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"

 async function gerarCodigo(){
    let textarea = document.querySelector(".prompt").value

    let resposta = await fetch("https://api.groq.com/openai/v1/chat/completions")

    console.log(textarea)
}