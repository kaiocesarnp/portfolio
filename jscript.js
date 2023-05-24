var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  
  $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.one').addClass("sticky");
        }else{
            $('.one').removeClass("sticky");
        }
    });

var typed = new Typed(".typing", {
    strings:["César"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
    });
    });

    // EXPLICAÇÃO DE CADA LINHA:
// 1. `var swiper = new Swiper(".mySwiper", {`: Aqui, está sendo inicializada uma instância do Swiper, um plugin de slider popular, no elemento com a classe `.mySwiper`.

// 2. `cssMode: true,`: Esta opção ativa o modo CSS do Swiper, permitindo que a funcionalidade do slider seja controlada principalmente por meio de CSS.

// 3. `loop: true,`: Essa opção define o modo de loop do Swiper, permitindo que o slider percorra os slides em um loop contínuo.

// 4. `navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", },`: Aqui, são definidos os elementos de navegação do Swiper. O `.swiper-button-next` representa o botão de próxima página/slide, enquanto o `.swiper-button-prev` representa o botão de página/slide anterior.

// 5. `pagination: { el: ".swiper-pagination", },`: Nesta linha, a configuração da paginação é definida. O elemento `.swiper-pagination` representa o elemento onde os indicadores de página/slide serão renderizados.

// 6. `mousewheel: true,`: Essa opção permite a rolagem do swiper usando o mouse.

// 7. `keyboard: true,`: Essa opção permite a navegação do swiper usando as setas do teclado.

// 8. `$(document).ready(function(){`: Isso inicia uma função que será executada assim que o documento HTML for totalmente carregado.

// 9. `$(window).scroll(function(){`: Aqui, é definido um evento de rolagem do navegador. A função será executada sempre que ocorrer uma rolagem na janela do navegador.

// 10. `if(this.scrollY > 20){`: Isso verifica se a quantidade de rolagem vertical (`scrollY`) é maior do que 20 pixels.

// 11. `$('.one').addClass("sticky");`: Se a condição acima for verdadeira, a classe "sticky" será adicionada ao elemento com a classe `.one`.

// 12. `else{ $('.one').removeClass("sticky"); }`: Caso contrário, a classe "sticky" será removida do elemento com a classe `.one`.

// 13. `var typed = new Typed(".typing", {`: Aqui, uma instância do Typed.js é criada, um plugin que simula a digitação de texto.

// 14. `strings:["César"],`: Este é um array de strings que será exibido como texto digitado.

// 15. `typeSpeed:100,`: Essa opção define a velocidade de digitação do texto.

// 16. `backSpeed:60,`: Esta opção define a velocidade de retrocesso (apagando) do texto.

// 17. `loop:true }); });`: Aqui, é definido que o Typed.js continuará repetindo as strings definidas em um loop contínuo.
