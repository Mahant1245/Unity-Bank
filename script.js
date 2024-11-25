// hamburger script
$(document).ready(function(){

    const tabs=$("#tabs");
    const hamburger=$("#hamburger");

    // checks the width of the screen
    function chkSrcWidth(){
        if(window.innerWidth<=1022){
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
$(document).ready(function(){

    //script for help
    $('#helpBtn').click(function(){
        alert("Hi,\n\nIn this form you have to write a your first and last name separately then email and subject of your email. and then include the message.\n\nFor now I have kept min len for message to be 5 character to easily test\n\n\nEnjoy!")
    })
    //script for reset
    $('#resetBtn').click(function(event){
        event.preventDefault();
        $('#bank_form')[0].reset();
    })

    //script for submit
    $('#bank_form').on('submit',function(event){

        event.preventDefault();

        const msg=$('#message').val().trim();
        const result=$('#result');
        const messagebox=$('#message');

        if(msg.length<5){
            result.text('Error:- Message should be atleast 5 character long');
            result.css('color','red');
            messagebox.css('border','2px solid red');
        }
        else{
            result.text('Message submitted');
            messagebox.css('border','2px solid green');
            result.css('color','green')
            $('#bank_form')[0].reset();//selecttor selects the form and reset the whole thing.found on geeksforgeeks
            setTimeout(function(){
                result.text('');
                messagebox.css('border','none');
            },3000)//3sec
        }
    });
});

//about us section
// $(document).ready(function(){
//     $(".year").hover(function(){
//         var current_content=$(this).find(".year_content")

//         //this var gets the h and w of ew content
//         current_content.css('display','inline-block');
//         var new_height=$(this).find(".year_content").outerHeight();
//         var new_width=$(this).find(".year_content").outerWidth();

//         $(this).find(".year_content").animate({
//             left: '250px',
//             height: new_height,
//             width:new_width
//         }); 
//     });
// });

// function(){//reset to normal
//     $(this).animate({
//         left: '0px',
//         height: '100px',
//         width:'158px'
//     }); 
//     $(this).find(".year_content").css('display','none');
// }