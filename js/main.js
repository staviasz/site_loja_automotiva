$(document).ready(function() {
    $('#carrossel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculo_interesse: {
                required: false 
            }
        }, 
        messages: {
            nome: '<p class="mensagem_erro">Por favor insira seu nome</p>',
            telefone: '<p class="mensagem_erro">Por favor insira seu telefone</p>',
            email: '<p class="mensagem_erro">Por favor insira seu E-mail</p>',
            mensagem: '<p class="mensagem_erro">Este campo é requerido</p>'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let campos_incorretos = validador.numberOfInvalids();
            if ( campos_incorretos){
                alert(`Existe ${campos_incorretos} campos não preenchidos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nome_veiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nome_veiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});