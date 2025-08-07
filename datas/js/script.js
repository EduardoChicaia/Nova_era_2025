const data = new Date();

console.log(data)

const dandoDia = new Date(1990, 3, 19, 0, 0);

console.log(`${dandoDia.toString()} dia do meu nacimento `);

// Obtendo Dia actual, mês, ano, semana, hora, minuto, etc

console.log('Data', data.getDate());
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('hora', data.getHours())
console.log('Minutos', data.getMinutes());
console.log('Semana', data.getDay())