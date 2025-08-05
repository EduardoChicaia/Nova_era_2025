function geral(){
    const form = document.querySelector('.form');
    
    function calculo(event){
        event.preventDefault()

        const peso = document.querySelector('.peso').value;
        const altura = document.querySelector('.altura').value;
        
        const imc = peso/(altura*altura)
        
        const resultado = document.querySelector('.Resultado')

        function grau (dev){
            const nivel= ['Baixo peso', 'Peso normal', 'Sobre Peso', 'Obesidade I grau', 'Obesidade II grau', 'Obesidade III grau']

            if (imc >= 40){
                return nivel[5];
            }
            if (imc >= 39.9 || imc >= 35){
                return nivel[4];
            }
            if (imc >= 34.9 || imc >= 30){
                return nivel[3];
            }
            if (imc >= 29.9 || imc >= 25){
                return nivel[2];
            }
            if (imc >= 24.9 || imc >= 18 ){
                return nivel[1];
            }else if (imc < 18){
                return nivel[0];
            }
            
        }
        console.log(grau())
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)}  (${grau()}) </p>`;
        console.log(imc.toFixed(2) )
    }
    form.addEventListener('submit', calculo)
}
geral()