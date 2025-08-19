

    const targetLink = "http://sakurazaka.s324.xrea.com/megumi-completa/megumi-completa3/HELLO5.html";
    const outLink = "https://soundcloud.com/a_s_up_2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
    const github = "https://github.com/henrry-sakurazaka";
    const reminder = "https://reminder5-27ef0.web.app";
    const mountain = "http://sakurazaka.s324.xrea.com/mountain-view/mountain.html";
    const engineerPost = "http://sakurazaka.s324.xrea.com/products-app/bbs.php";
    const helloTypeScript = "https://hello-typescript-8a1d9.web.app";
    const reminderGitHub = "https://github.com/henrry-sakurazaka/Reminder";
    const typescriptGitHub = "https://github.com/henrry-sakurazaka/Hello-TypeScript";
    const megumiGitHub = "https://github.com/henrry-sakurazaka/Megumi-Completa-Official";
    const engineerPostGitHub = "https://github.com/henrry-sakurazaka/Engineer-Post";
    const completeContactPath = "/contacts/complete"; 

  
    window.architectureChart = window.architectureChart || "./images/Blank diagram-12.png";
    window.myOptions = window.myOptions || {};



    $('body').removeClass('fo');
    $('.animation').addClass('active');

    function delay () {

        $(".animation").append('<div class="fade_group"> \
        <div></div> \
        <div></div> \
        <div></div> \
        <div></div> \
        </div>');

        $(".animation").append('<div class="fade_group2"> \
        <div></div> \
        <div></div> \
        </div>');

       }

       setTimeout(delay, 2000);
    
$(function() {
    $('a:not([href^="#"]):not([target]):not([href="'+ engineerPostGitHub + '"]):not([href="'+ megumiGitHub + '"]):not([href="'+ targetLink + '"]):not([href="' + reminderGitHub +'"]):not([href="' + typescriptGitHub +'"]):not([href="'+ outLink + '"]):not([href="'+ helloTypeScript + '"]):not([href="' + reminder + '"]):not([href="'+ github + '"]):not([href="' + mountain +'"]):not([href="' + architectureChart +'"]):not([href="'+ completeContactPath +'"]):not([href="' + engineerPost +'"]')
    .on('click', function(e){
        e.preventDefault();
        let url = $(this).attr('href');

        if (url !== '' && url !== targetLink) {
            $('body').addClass('fadeout');
            // $('.animation').addClass('active');
            setTimeout(function(){
                window.location = url;
            }, 800);
        }
        return false;
    }
    );
});