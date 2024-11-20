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

$(document).ready(function(){
    // here we use .waypoint() to extract thing from cdn
    $(".main_heading").waypoint(function(){
         console.log("reach to top");
    })
});