function updateTime() {
  let dataBrasil = document.querySelector(".container h1");

  let hora = new Date().toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const data = new Date();
  let weekDay;
  let month;

  switch (data.getDay()) {
    case 0:
      weekDay = "Domingo";
      break;
    case 1:
      weekDay = "Segunda-feira";
      break;
    case 2:
      weekDay = "Terça-feira";
      break;
    case 3:
      weekDay = "Quarta-feira";
      break;
    case 4:
      weekDay = "Quinta-feira";
      break;
    case 5:
      weekDay = "Sexta-feira";
      break;
    case 6:
      weekDay = "Sábado";
      break;
  }

  switch (data.getMonth()) {
    case 0:
      month = "Janeiro";
      break;
    case 1:
      month = "Fevereiro";
      break;
    case 2:
      month = "Março";
      break;
    case 3:
      month = "Abril";
      break;
    case 4:
      month = "Maio";
      break;
    case 5:
      month = "Junho";
      break;
    case 6:
      month = "Julho";
      break;
    case 7:
      month = "Agosto";
      break;
    case 8:
      month = "Setembro";
      break;
    case 9:
      month = "Outubro";
      break;
    case 10:
      month = "Novembro";
      break;
    case 11:
      month = "Dezembro";
      break;
  }

  dataBrasil.innerHTML = `${weekDay}, ${data.getDate()} de ${month} de ${data.getFullYear()} </br>às ${hora}`;
}

//Irá atualizar o relógio a cada segundo
setInterval(updateTime, 1000);
