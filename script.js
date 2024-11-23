// hamburger script
$(document).ready(function(){
    const tabs=$("#tabs");
    const hamburger=$("#hamburger");

    // checks the width of the screen
    function chkSrcWidth(){
        if(window.innerWidth<=1007){
            tabs.addClass("hidden");
            hamburger.show();
        }
        else{
            tabs.removeClass("hidden vertical");
            hamburger.hide();
        }
    }
    hamburger.on("click",function(){
        tabs.toggleClass("hidden vertical");
        
    });

    $(window).on("resize",chkSrcWidth);//checks each time usr change the size
    chkSrcWidth();
});

//scroll script
let sections = document.querySelectorAll('section');
//=> is the arrow function. this replace the traditional way of writing functions. for eg here it creates the scroll function.
window.onscroll = () =>{
    let scrollPos = window.innerHeight / 2 + window.scrollY;
    
    sections.forEach(sec =>{
        
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if(scrollPos >= offset && scrollPos < offset + height){
            sec.classList.add('show_animate');
        }
        else{
            sec.classList.remove('show_animate');
        }
    })
}

//faq script
$(document).ready(function(){
    $(".faq_title").click(function(){
        var content = $(this).next(".faq_content")
        if(content.is(":visible")){
            content.slideUp();
            $(this).find(".chevron_symbol").removeClass("rotate");
        }
        else{
            $(".faq_content").slideUp();
            $(".chevron_symbol").removeClass("rotate");
            content.slideDown();
            $(this).find(".chevron_symbol").addClass("rotate");
        }
    });
});

//form validation
function err(){
    var error=document.getElementById("error")
    if(isNaN(document.getElementById("userAge1").value)){
        error.textContent = "please enter the valid number";
        error.style.color="red";
        document.getElementById("userAge1").style.borderColor ="red";
        return true;
        // //this code below will stop sending the form
        // const form = document.getElementById('myForm');
        // form.addEventListener('submit', function(event) {
        // event.preventDefault();
        // });

    }
    else if(parseInt(document.getElementById("userAge1").value)<18){
        error.textContent = "You are too young";
        error.style.color="red";
        
        document.getElementById("userAge1").style.borderColor ="red";
        return true;

        // //this code below will stop sending the form
        // const form = document.getElementById('myForm');
        // form.addEventListener('submit', function(event) {
        // event.preventDefault();
        // var field= document.getElementById('userAge1');
        // field.value= field.defaultValue;
        // });
    }
}
function chk(){
    if(err()){

    }
}