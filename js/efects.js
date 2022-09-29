const type = new Typed('.typed',{
    strings:['<> Web developer <>', '<> Web designer <>', '<> User experience designer <>'],
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 2000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
   });

   const type2 = new Typed('.typed2',{
    strings:["Hi, i'm Andres Villada"],
    typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
    loop: false, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: false, // Mostrar cursor palpitanto
    contentType: 'html', // 'html' o 'null' para texto sin formato
   });

   function sectionHome() {
    bubbleInit = 0;
    while (bubbleInit <= 6) {
        bubbleInit++;
        $("#bubble"+bubbleInit).removeClass("opacity-0");
        $("#bubble"+bubbleInit).removeClass("opacity-1");
    }

    $("#homeBtn").addClass("activeBtn");
    $("#skillsBtn").removeClass("activeBtn");
    $("#projectsBtn").removeClass("activeBtn");

    $("#skills").slideUp(1000);
    $("#ag-container-shops").slideUp(1000);
    setTimeout(() => {
        $("#projects").slideUp(200);
    }, 1000);

    $("#home").slideDown(1000);
    var bubble = 0;
    while (bubble <= 6) {
        bubble++;
        $("#bubble"+bubble).addClass("opacity-0");
    }
    setTimeout(() => {
        var bubble2 = 0;
        while (bubble2 <= 6) {
            bubble2++;
            $("#bubble"+bubble2).html("<img src='assets/bubble.png'>");
            $("#bubble"+bubble2).removeClass("bubblet"+bubble2);
            $("#bubble"+bubble2).addClass("bubble"+bubble2);
            $("#bubble"+bubble2).addClass("opacity-1");
        }
    }, 1000);
   }

   function sectionSkills() {
    bubbleInit = 0;
    while (bubbleInit <= 6) {
        bubbleInit++;
        $("#bubble"+bubbleInit).removeClass("opacity-0");
        $("#bubble"+bubbleInit).removeClass("opacity-1");
    }
    
    $("#skillsBtn").addClass("activeBtn");
    $("#homeBtn").removeClass("activeBtn");
    $("#projectsBtn").removeClass("activeBtn");

    $("#home").slideUp(1000);
    $("#ag-container-shops").slideUp(1000);
    setTimeout(() => {
        $("#projects").slideUp(200);
    }, 1000);
    $("#skills").slideDown(1000);
    var bubble = 0;
    while (bubble <= 6) {
        bubble++;
        $("#bubble"+bubble).addClass("opacity-0");
    }
    setTimeout(() => {
        var bubble2 = 0;
        while (bubble2 <= 6) {
            bubble2++;
            $("#bubble"+bubble2).html("<img src='assets/triangle.png'>");
            $("#bubble"+bubble2).removeClass("bubble"+bubble2);
            $("#bubble"+bubble2).addClass("bubblet"+bubble2);
            $("#bubble"+bubble2).addClass("opacity-1");
        }
    }, 1000);
   }
   function sectionProjects() {
    bubbleInit = 0;
    while (bubbleInit <= 6) {
        bubbleInit++;
        $("#bubble"+bubbleInit).removeClass("opacity-0");
        $("#bubble"+bubbleInit).removeClass("opacity-1");
    }

    $("#projectsBtn").addClass("activeBtn");
    $("#homeBtn").removeClass("activeBtn");
    $("#skillsBtn").removeClass("activeBtn");

    $("#home").slideUp(1000);
    $("#skills").slideUp(1000);
    $("#projects").slideDown(1000);
    setTimeout(() => {
    $("#ag-container-shops").slideDown(1000);
    (function ($) {
        $(function () {
            var agSlideFlickity = $('.js-flickity-slider').flickity({
            autoPlay: 2000,
            imagesLoaded: true,
            percentPosition: false,
            prevNextButtons: false,
            initialIndex: 1,
            pageDots: false,
            groupCells: 1
            });

            var agCard = agSlideFlickity.find('.js-carousel-cell .js-card-bg'),
            agTransform = 'string' == typeof document.documentElement.style.transform ? 'transform' : 'WebkitTransform',
            agSlide = agSlideFlickity.data('flickity');

            agSlideFlickity.on('scroll.flickity', function () {
            agSlide.slides.forEach(function (t, e) {
                var n = agCard[e],
                i = -1 * (t.target + agSlide.x) / 3;

                n.style[agTransform] = 'translateX(' + i + 'px)';
            });
            });

            agSlideFlickity.on('dragStart.flickity', function (t, e) {
            document.ontouchmove = function (t) {
                t.preventDefault();
            }
            });

            agSlideFlickity.on('dragEnd.flickity', function (t, e) {
            document.ontouchmove = function (t) {
                return true;
            }
            });

        });
    })(jQuery);
        
    }, 1000);
    var bubble = 0;
    while (bubble <= 6) {
        bubble++;
        $("#bubble"+bubble).addClass("opacity-0");
    }
    setTimeout(() => {
        var bubble2 = 0;
        while (bubble2 <= 6) {
            bubble2++;
            $("#bubble"+bubble2).html("<img src='assets/square.png'>");

            if ($("#bubble"+bubble2).hasClass("bubble"+bubble2)) {
                $("#bubble"+bubble2).removeClass("bubble"+bubble2);
                $("#bubble"+bubble2).addClass("bubblet"+bubble2);
            } else if($("#bubble"+bubble2).hasClass("bubblet"+bubble2)) {
                $("#bubble"+bubble2).removeClass("bubblet"+bubble2);
                $("#bubble"+bubble2).addClass("bubble"+bubble2);
            }

            $("#bubble"+bubble2).addClass("opacity-1");
        }
    }, 1000);
   }
    var carousel = $(".carousel"),
    currdeg  = 0;

    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);

    var i = 0;
    function rotate(e){
    elemento = ["js","html","css","btp","php","sql"];
    if(e.data.d=="n"){
        if (i >= 5) {
            i = -1;
        }
        if (p == 5) {
            p = -1;
        }
        i++;
        var p = i - 1;
        if (i == 0) {
            p = 5;
        }
        currdeg = currdeg - 60;
        $("#"+elemento[i]).css({"background":"#fff"});
        $("#"+elemento[p]).css({"background":"rgba(255,255,255,0.5)"});
        console.log("a:"+p);
        console.log("i:"+i);
    }
    if(e.data.d=="p"){
        if (i == 0) {
            i = 6;
        }
        i--;
        n = i + 1;

        if (i == 5) {
            n = 0;
        }
        $("#"+elemento[i]).css({"background":"#fff"});
        $("#"+elemento[n]).css({"background":"rgba(255,255,255,0.5)"});
        currdeg = currdeg + 60;
        console.log("n:"+n);
        console.log("i:"+i);
    }
    carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
    });
    }