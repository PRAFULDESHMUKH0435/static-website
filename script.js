$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Flutter Developer","Android Developer and Designer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Flutter Developer","Android Developer and Designer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/////////////////CODE FOR MESSAGE SENDING

function gotowhatsapp() {
     var name = document.getElementById("username").value;
    var phone = document.getElementById("userSubject").value;
    var email = document.getElementById("useremail").value;
    var service = document.getElementById("usermessage").value;

    var url = "https://wa.me/+918999384981?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    + "Service: " + service; 

    window.open(url, '_blank').focus();
}
////////////////////
function  forBMI(){
    var url = "https://drive.google.com/file/d/1IUxAfxQMtptear18VLTPV-xhG0Zdk5kz/view?usp=sharing" 
    window.open(url, '_blank').focus();
}
function  forSAHAYAK(){
    var url = "https://drive.google.com/file/d/17EKrD_7pGE6qznoOF1xwpk__yykqP1WY/view?usp=sharing" 
    window.open(url, '_blank').focus();
}
function  forVAARTAHAR(){
    var url = "https://drive.google.com/file/d/1JkS9sUBMZh1F4HdDVR36RoOh3hH-G611/view?usp=sharing" 
    window.open(url, '_blank').focus();
}
function  forINSECURECBS(){
    var url = "https://drive.google.com/file/d/1_jKOOqmxtDM37IWth30jb0iu4AXRtcZs/view?usp=sharing" 
    window.open(url, '_blank').focus();
}

function forLinkedIn(){
    var url = "https://www.linkedin.com/in/praful-deshmukh068/" 
    window.open(url, '_blank').focus();
}

function forGithub(){
    var url = "https://github.com/PRAFULDESHMUKH0435?tab=repositories" 
    window.open(url, '_blank').focus();
}


function forPatreon(){
    var url = "https://www.patreon.com/prafuldeshmukh/shop" 
    window.open(url, '_blank').focus();
}
