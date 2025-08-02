function meuEscopo() {
    const form = document.querySelector('.form')
    const pessoa = []
    const resultado = document.querySelector('.resultado')

    function pararEvento (evento) {

        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobre = form.querySelector('.sobre')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoa.push({
            nome: nome.value,
            sobre: sobre.value,
            peso: peso.value,
            altura: altura.value
        })
        
        resultado.innerHTML += `<p>${nome.value} ${sobre.value} ${peso.value} ${altura.value}</p>`
        console.log(pessoa)
       
        
    }
    
    form.addEventListener('submit', pararEvento);
}
meuEscopo()
