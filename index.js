var vh = $(window).height() * 0.01;

$("#1").on("click", function(){
        $('html, body').animate({ scrollTop: $(".about_container").offset().top} , 700);
});
$("#2").on("click", function(){
        $('html, body').animate({ scrollTop: $(".lego_container").offset().top}, 700);
});
$("#3").on("click", function(){
        $('html, body').animate({ scrollTop: $(".sponsor_container").offset().top - (1.5*vh)}, 700);
});
$("#4").on("click", function(){
         $('html, body').animate({ scrollTop: 0}, 1700);
});

var i = 0, text, regularTypingDelay = 70, bigTypingDelay = 500;
text = "This is Us. This is 589.";

function typing(){
        if(i < 24){
                if(i !== 11){
                        setTimeout(function(){
                        document.getElementById("thath1_desktop").innerHTML += text.charAt(i);
                        document.getElementById("thath1_mobile").innerHTML += text.charAt(i);
                        i++;
                        setTimeout(typing, regularTypingDelay);
                        }, 0);
                }
                else{
                        setTimeout(function(){
                        document.getElementById("thath1_desktop").innerHTML += text.charAt(i);
                        document.getElementById("thath1_mobile").innerHTML += text.charAt(i);
                        i++;
                        setTimeout(typing, regularTypingDelay);
                        }, bigTypingDelay);
                }
        }
}
typing(); 
$(document).ready(function(){
	$(".fa-bars").on("click", function(){
                $(".side").toggleClass("sidepopup");
        });
        $(".fa-times").on("click", function(){
                $(".side").addClass("transition");
                $(".side").removeClass("sidepopup");
        });
});