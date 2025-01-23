# Otaku+

Este é um site promocional para o serviço Otaku+, que oferece uma assinatura de animes e aprendizado de japonês com temas de anime e cultura pop.

## Visão Geral

O site é composto por várias seções que destacam os benefícios do serviço Otaku+ e do Kombo+, uma oferta combinada que inclui Otaku+ e Nihongo Gengo.

### Estrutura do Projeto

- **HTML**: Estrutura do layout do site.
- **CSS**: Estilos para o layout e design do site.
- **JavaScript**: Interatividade básica com o usuário.

## Estrutura de Pastas

```plaintext
/
├── index.html
├── css/
│   ├── style.css
│   └── reset.css
├── img/
│   ├── Combo+.png
│   ├── Monitor.png
│   ├── Telas.png
│   ├── Notebook.png
│   ├── tv.png
│   ├── computador.png
│   ├── celular.png
│   └── Logo.png
└── js/
    └── script.js
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Otaku+</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="reset.css">
</head>
<body>
    <section class="container main">
        <div class="container__box-main">
                <h1 class="container__box-title">Com o Kombo+, você pode aproveitar o Otaku+ e o Ninhongo Gengo por um preço único.</h1>
                <img src="./Img/Combo+.png" alt="Logo do Kombo+" class="container__box-img">
                <a href="#" class="container__box-button">Assine por 12x de R$ 99,00*</a>
                <a href="#" class="container__box-button seg">Assinar somente o Otaku+</a>
                <p class="container__box__text">*O preço pode variar caso a assinatura seja feita em outros planos</p>
        </div> 
    </section>
    <section class="container second">
        <img src="./Img/Monitor.png" alt="#" class="container__monitor-img">
        <div class="container__monitor">
            <h2 class="container__monitor-title">Assista do seu jeito</h2>
            <p class="container__monitor-text">Assista no seu próprio ritmo, seja na TV, laptop, tablet ou celular. Nosso acervo inclui clássicos, lançamentos e conteúdos exclusivos.</p>
        </div>
    </section>
    <section class="container third">
        <img src="./Img/Telas.png" alt="#" class="container__tablet-img">
        <div class="container__tablet">
            <p class="container__tablet-text">O Kombo+ oferece acesso ao Otaku+ para assistir animes e ao NihongoGengo para aprender japonês com temas e expressões de anime e cultura pop. Mergulhe na cultura japonesa como nunca!</p>
            <a href="#" class="container__tablet-button button">Assine o kombo+</a>
        </div>
    </section>
    <section class="container four">
        <img src="./img/Notebook.png" alt="#" class="container__box-img-four">
        <div class="container__text">
        <h2 class="container__text-title">Baixe seus animes favoritos</h2>
        <p class=".container__text-title">Leve seus animes para qualquer lugar! Baixe e assista offline, garantindo que sua dose de cultura japonesa esteja sempre ao seu alcance.</p>
       </div>
      </section>

    <section class="container five">
        <div class="container__notebook">
            <h2 class="container__notebook-title">Disponível nos seus dispositivos favoritos</h2>
            <ul class="container__notebook-list"> 
                <li><img src="./img/tv.png" alt="Logo de uma tv"><h3>TV</h3></li> 
                <li><img src="./img/computador.png" alt="Logo de um computador"><h3>Computadores</h3></li> <li><img src="./img/celular.png" alt="Logo de um celular"><h3>Celulares e tablets</h3></li> 
            </ul>
            
        </div>
    </section>
    <footer class="container footer">
        <div class="container__end">
            <img src="./Img/Logo.png" alt="#" class="container__end-logo">
            <ul class="footer__list"> 
                <li><a href="#">Dispositiv os compatíveis</a></li> 
                <li><a href="#">Contrato de assinatura</a></li>
                <li><a href="#">Politica de privacidade</a></li>
                <li><a href="#">Ajuda e Suporte</a></li>
                <li><a href="#">Explore a Cultura Japonesa</a></li>
                <li><a href="#">Blog Otaku+</a></li> 
            </ul>
            <p class="container__end-text">® 2024 Otaku+, NihongoGengo e Kombo+. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito à disponibilidade.</p>
            <p class="container__end-text2">Otaku+ e NihongoGengo são serviços pagos, baseados em assinatura e sujeitos a termos e condições. O serviço Kombo+ é operado e comercializado por <br>KageTech Ltda, Distrito Neo-Tokyo, 42, Bairro Akiba, Setor Shibuya, Cidade Kawaishi, Província de Yamato, CEP 12345-678, Brasil. CNPJ 12.345.678/0001-99.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>

:root {
    --withe-main: #fff;
    --withe-secondary: #f9f9f9;
    --orange-main: #ff740a;
    --background-color: #170A00;
    --font-main: 'Bangers', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
}
body {
    background-color: var(--background-color);
    color: var(--withe-main);
    font-family: var(--font-main);
    font-size: 16px;
    letter-spacing: 2px;
}
.main {
    background-image: url(../Site/Img/Background.png);
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center;
    align-items: center;
    
}
.container {
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
}
.container__box-main {
    margin: 0 3em;
}
.container__box-title {
    font-size: 28px;
}
.container__box-img {
    margin: 1em 0 2em 0;
}
.container__box-button   {
    background-color: var(--orange-main);
    border-radius: 8px;
    color: var(--withe-main);
    padding: 1em;
    display: block;
    margin: 1em;
    text-decoration: none;
}
.seg {
    background-color: transparent;
    border: 3px solid #f9f9f9;
}
.container__box-button:hover {
    background-color: var(--withe-main);
    color: var(--orange-main);
}
.container__box__text {
    color: var(--withe-secondary);
    font-size: 12px;
}
.container__box {
    margin: 0 6em;
}
.four{
    align-items: center;
    margin: 10em;
    
}
.container__text-title {
    font-size: 48px;
    margin-bottom: var(--branco-segundario);
}
 
.container__text-title{
    color: var(--branco-segundario);
}
.second {
    align-items: center;
    margin: 10em;
}
.container__obs-title {
    font-size: 48px;
    margin-bottom: 0.5em;
}
.container__obs-text {
    color: var(--withe-secondary);

}
.third{
    align-items: center;
    margin: 10em;
    display: grid;
    grid-template-columns: 50% 50%;
    direction: rtl;
}
.container__tablet-button   {
    background-color: var(--orange-main);
    border-radius: 8px;
    color: var(--withe-main);
    padding: 1em;
    display: block;
    margin: 1em;
    text-decoration: none;
    width: 158px;
    
}
.button{
    width: fit-content;
    margin: 1em 0;
}
.five{
    text-align: center;
    display: grid;
    grid-template-columns: 100%; 
}
.container__notebook-list{
    display: flex;
    justify-content: center;
    list-style-type: none;
}
.footer{
    font-family: var(--font-secondary);
    letter-spacing: 0px;
    text-align: center;
    display: grid;
    grid-template-columns: 100%;
}
.footer__list{
    display:flex ;
    justify-content: center;
    list-style: none;
    margin: 2em 0;
    font-size: 16px;
}
.footer__list li a {
    text-decoration: none;
    color: var(--withe-secondary);
    margin: 0 1em;
}
.footer__list p{
    font-size: 14px;
    color: var(--withe-secondary);
    margin: 1em 0;
}
