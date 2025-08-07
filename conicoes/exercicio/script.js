function pegandoDados (){

    const data = new Date();
    let ObtendoDiaSemana = data.getDay ();
    let obtDia = data.getDate();
    let obtMes = data.getMonth();
    let obtAno = data.getFullYear();
    let obtHora = data.getHours();
    let obtMin = data.getMinutes();
    let avaliando;
    let avaliandoMes;
    let zero;

    const resultado = document.querySelector('.resultado')


    function semana(){
       
        switch (ObtendoDiaSemana){
            case 0:
                return 'Domindo';
            break;   
            case 1:
                return 'Segunda-Feira';
            break; 
            case 2:
                return 'Terça-Feira';
            break; 
            case 3:
                return 'Quarta-Feira';
            break; 
            case 4:
                return 'Quinta-Feira';
            break; 
            case 5:
                return 'Sexta-Feira';
            break; 
            case 6:
                return 'Sabado';
            break;  
            default:
                return 'Deu rui para ti...';
        };
        
        
    }
    function mes(){
        switch (obtMes){
            case 0:
                return 'Janeiro';
            break;
            case 1:
                return 'Feverreiro';
            break;
            case 2:
                return 'Março';
            break;
            case 3:
                return 'Abril';
            break;
            case 4:
                return 'Maio';
            break;
            case 5:
                return 'Junho';
            break;
            case 6:
                return 'Julho';
            break;
            case 7:
                return 'Agosto';
            break;
            case 8:
                return 'Setembro';
            break;
            case 9:
                return 'Outubro';
            break;
            case 10:
                return 'Novembro';
            break;
            case 11:
                return 'Dezembro';
            break;

            default:
                return 'Deu ruim...';

        };

     
    }
    function acrestandoZero (){
        if (obtMin < 10){
            return `0${obtMin}`
        }
    }
    resultado.innerHTML = `<p class="para"> ${semana()}, ${obtDia} de ${mes()} de ${obtAno}. ${obtHora}:${obtMin} </p>`;
    acrestandoZero()
    mes()
    semana()
    console.log( `${semana()}, ${obtDia} de ${mes()} de ${obtAno} ${obtHora}:${obtMin}`);
    
}
pegandoDados()