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
//
$(document).ready(function(){
    function showSection(section){
       $('.service_tab').removeClass('visible').addClass('hidden');
       $(section).removeClass('hidden').addClass('visible');
    }
    function checkSectionInView(){
        let currentSection=null;

        $('.service_tab').each(function(){
            const top_element=$(this).offset().top;
            const viewport_middle = $(window).scrollTop() + $(window).height() / 2;

            if(top_element<=viewport_middle&&top_element+$(this).outerHeight()>viewport_middle){
                currentSection=this;
                return false;
            }
        });
        if (currentSection){
            showSection(currentSection);
        }
    }

    $(window).on('scroll',function(){
        checkSectionInView();
    });

    checkSectionInView();

});