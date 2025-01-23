const button = document.querySelector('.container__box-button');
button.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Assinatura realizada com sucesso!');
    let name = prompt('Digite seu nome:');
    prompt('Digite seu email para receber novidades:');
    alert(`Obrigado ${name}, seu Email foi cadastrado com sucesso! Agora você receberá novidades em seu email.`);
});