$(document).ready(function(){

    $('.logo__img').click(function(){
        $("html, body").animate({ scrollTop: 0  });
    });

    $('.nav__item > a').click(function(e){
        e.preventDefault();
        if($('.nav').hasClass('open')) {
            document.querySelector('.nav').classList.remove('open');
            ($('.burger-menu > span:nth-child(3)'))[0].style.opacity = '1';
            ($('.burger-menu > span:nth-child(3)'))[0].style.top = '5px';
            ($('.burger-menu > span:nth-child(2)'))[0].style.top = '-5px';
            ($('.burger-menu > span:nth-child(2)'))[0].style.transform = 'none';
            ($('.burger-menu > span:nth-child(1)'))[0].style.top = '-15px';
            ($('.burger-menu > span:nth-child(1)'))[0].style.transform = 'none';
            $('body')[0].style.overflow = 'auto';
        }
        if($('.nav').hasClass('open-mobile')){
            document.querySelector('.nav').classList.remove('open-mobile');
            ($('.burger-menu > span:nth-child(3)'))[0].style.opacity='1';
            ($('.burger-menu > span:nth-child(3)'))[0].style.top='5px';
            ($('.burger-menu > span:nth-child(2)'))[0].style.top='-5px';
            ($('.burger-menu > span:nth-child(2)'))[0].style.transform='none';
            ($('.burger-menu > span:nth-child(1)'))[0].style.top='-15px';
            ($('.burger-menu > span:nth-child(1)'))[0].style.transform='none';
            $('body')[0].style.overflow = 'auto';
        }
       if(this.innerHTML === 'Фестівалі')
           $("html, body").animate({ scrollTop: $('.festivals').offset().top - 130  } ,'slow' );
        if(this.innerHTML === 'Головна')
            $("html, body").animate({ scrollTop: 0  });
        if(this.innerHTML === 'Галерея')
            $("html, body").animate({ scrollTop: $('.galery').offset().top - 130  }, 'slow');
        if(this.innerHTML === 'Табір')
            $("html, body").animate({ scrollTop: $('.tabir').offset().top - 130  },'slow');
        if(this.innerHTML === 'Про нас')
            $("html, body").animate({ scrollTop: $('.about_us_title').offset().top - 130  },'slow');
        if(this.innerHTML === 'Реквізити та контакти')
            $("html, body").animate({ scrollTop: $('.footer').offset().top - 130  },'slow');
    });

    $('.burger-menu').click(function(e) {
        if (window.innerWidth < 631) {
            document.querySelector('.nav').classList.remove('open');
            document.querySelector('.nav').classList.toggle('open-mobile');
            $('.nav').appendTo($('.header'));
        } else {
            document.querySelector('.nav').classList.toggle('open');
        }
        if($('.nav').hasClass('open')){
            ($('.burger-menu > span:nth-child(3)'))[0].style.opacity='0';
            ($('.burger-menu > span:nth-child(2)'))[0].style.top='-15px';
            ($('.burger-menu > span:nth-child(2)'))[0].style.transform='rotate(130deg)';
            ($('.burger-menu > span:nth-child(1)'))[0].style.top='-15px';
            ($('.burger-menu > span:nth-child(1)'))[0].style.transform='rotate(45deg)';
            $('body')[0].style.overflow = 'hidden';
            return true;
        }
        if($('.nav').hasClass('open-mobile')){
            ($('.burger-menu > span:nth-child(3)'))[0].style.opacity='0';
            ($('.burger-menu > span:nth-child(2)'))[0].style.top='-15px';
            ($('.burger-menu > span:nth-child(2)'))[0].style.transform='rotate(130deg)';
            ($('.burger-menu > span:nth-child(1)'))[0].style.top='-15px';
            ($('.burger-menu > span:nth-child(1)'))[0].style.transform='rotate(45deg)';
            $('body')[0].style.overflow = 'hidden';
            return true;
        }
        ($('.burger-menu > span:nth-child(3)'))[0].style.opacity='1';
        ($('.burger-menu > span:nth-child(3)'))[0].style.top='5px';
        ($('.burger-menu > span:nth-child(2)'))[0].style.top='-5px';
        ($('.burger-menu > span:nth-child(2)'))[0].style.transform='none';
        ($('.burger-menu > span:nth-child(1)'))[0].style.top='-15px';
        ($('.burger-menu > span:nth-child(1)'))[0].style.transform='none';
        $('body')[0].style.overflow = 'auto';
    })

});