$(document).ready(function(){
    $('.nav__item > a').click(function(e){
        e.preventDefault();
       if(this.innerHTML === 'Фестівалі')
           $("html, body").animate({ scrollTop: $('.festivals').offset().top - 200  } , 'slow');
        if(this.innerHTML === 'Головна')
            $("html, body").animate({ scrollTop: 0  });
        if(this.innerHTML === 'Галерея')
            $("html, body").animate({ scrollTop: $('.galery').offset().top - 200  }, 'slow');
        if(this.innerHTML === 'Табір')
            $("html, body").animate({ scrollTop: $('.tabir').offset().top - 200  }, 'slow');
        if(this.innerHTML === 'Про нас')
            $("html, body").animate({ scrollTop: $('.about_us_title').offset().top - 200  }, 'slow');
        if(this.innerHTML === 'Реквізити та контакти')
            $("html, body").animate({ scrollTop: $('.footer').offset().top - 200  }, 'slow');
    });
});