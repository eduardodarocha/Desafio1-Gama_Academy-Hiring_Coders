function countdown() {
  var now = new Date();

  // Altere a data do seu evento aqui
  var eventDate = new Date("Jul 31, 2021 00:00:00");

  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTime;

  // Calculo do dia, hora, minuto e segundo
  var day = Math.floor(remTime / (1000 * 60 * 60 * 24));
  var hour = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((remTime % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = day;
  document.getElementById("days").innerText = day;
  document.getElementById("hours").textContent = hour;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = second;
  setTimeout(countdown, 1000);

  // Verifica se acabou o período do evento
  if (remTime < 0) {
    clearInterval(countdown);

    document.getElementById("days").innerHTML = " ";
    document.getElementById("hours").innerHTML = " ";
    document.getElementById("minutes").innerHTML = " ";
    document.getElementById("seconds").innerHTML = "<small>FIM</small>";
  }
}

document.getElementById('enviar').addEventListener('click', function (e) {
  e.preventDefault();

  // Armazena email no localStorage
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let obj;
  obj = {
    nome: nome.value,
    email: email.value,
  };

  localStorage[nome.value] = JSON.stringify(obj);
  nome.value = "";
  email.value = "";

  let textButton = document.getElementById('button')
  let msgLoading = `<button id="enviar" type="button">Carregando...</button>`

  let msgSuccess = `<button id="enviar" type="button">Cadastrado com sucesso</button>`
  textButton.innerHTML = msgLoading;
  setTimeout(() => {
    textButton.innerHTML = msgSuccess
  }, 1000)

});
countdown();