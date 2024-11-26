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

//scroll script used for service
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

//faq script used for accordion style
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

//form validation for contact us page
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
        const subject =$('#subject').val().trim();
        const subject_box=$('#subject');
        const result=$('#result');
        const messagebox=$('#message');

        if(msg.length<5){
            result.text('Error:- Message should be atleast 5 character long');
            result.css('color','red');
            messagebox.css('border','4px solid red');
            subject_box.css('border','2px solid #000000');
            subject_box.css('border-radius', '8px');
        }
        else if(subject.length<5){
            result.text('Error:- Subject should be atleast 5 character long');
            result.css('color','red');
            subject_box.css('border','4px solid red');
            messagebox.css('border','2px solid #000000');
            messagebox.css('border-radius', '8px');
        }
        else{
            result.text('Message submitted');
            messagebox.css('border','4px solid #00e431');
            subject_box.css('border','4px solid #00e431');
            result.css('background-color','#00e431')
            $('#bank_form')[0].reset();//selecttor selects the form and reset the whole thing.found on geeksforgeeks
            setTimeout(function(){
                result.text('');
                messagebox.css('border','2px solid #000000');
                messagebox.css('border-radius', '8px');
                subject_box.css('border','2px solid #000000');
                subject_box.css('border-radius', '8px');
            },3000)//3sec
        }
    });
});

// about us section
$(document).ready(function(){

    //2008
    $("#y_2008").hover(function(){
        //hide everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(0px)")
        $("#y_2000").css("border","none")
        $("#content_2000").hide();

        $("#content_2008").show();
    },function(){
        $("#content_2008").hide();

        //show again everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(-10px)")
        $("#y_2000").css("border","5px solid #ffd700")
        $("#content_2000").show();
    });

    //2016
    $("#y_2016").hover(function(){
        //hide everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(0px)")
        $("#y_2000").css("border","none")
        $("#content_2000").hide();

        $("#content_2016").show();
    },function(){
        $("#content_2016").hide();
        
        //show again everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(-10px)")
        $("#y_2000").css("border","5px solid #ffd700")
        $("#content_2000").show();
    });

    //2024
    $("#y_2024").hover(function(){
        //hide everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(0px)")
        $("#y_2000").css("border","none")
        $("#content_2000").hide();

        $("#content_2024").show();
    },function(){
        $("#content_2024").hide();
        
        //show again everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(-10px)")
        $("#y_2000").css("border","5px solid #ffd700")
        $("#content_2000").show();
    });

    //future plans
    $("#y_fp").hover(function(){
        //hide everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(0px)")
        $("#y_2000").css("border","none")
        $("#content_2000").hide();

        $("#content_fp").show();
    },function(){
        $("#content_fp").hide();
        
        //show again everything for 2000(default thing)
        $("#y_2000").css("transform","translateY(-10px)")
        $("#y_2000").css("border","5px solid #ffd700")
        $("#content_2000").show();
    });

    
});

$(document).ready(function(){
    //reset calc
    $('#calc_reset').click(function(event){
        $('#calc_form')[0].reset();
    })

    $('#m_calculate').click(function(event){
        event.preventDefault();

        var p= parseFloat($('#loan_amount').val());
        const r= parseFloat(0.045/12);
        var n= parseFloat($('#loan_term').val())*12;
        var income = parseFloat($('#monthly_income').val());
        var monthy_repayment = (p*r*(1 + r)**n)/((1 + r)**n-1);
        var threshold=0.3*income;
        var income_left=income-monthy_repayment;
        var total_payment=monthy_repayment

        if(isNaN(p)){
            $(".calc_input").css('border', '2px solid #000000');
            $(".calc_input").css('border-radius', '8px');
            $('#loan_amount').css('border','4px solid red');
            $("#result_content").text("Invalid Input!!Loan amount must be a number ");
            $("#result_content").css('color','red');
        }
        else if(isNaN(n)){
            $(".calc_input").css('border', '2px solid #000000');
            $(".calc_input").css('border-radius', '8px');
            $('#loan_term').css('border','4px solid red');
            $("#result_content").text("Invalid Input!!Loan term must be a number ");
            $("#result_content").css('color','red');
        }
        else if(isNaN(income)){
            $(".calc_input").css('border', '2px solid #000000');
            $(".calc_input").css('border-radius', '8px');
            $('#monthly_income').css('border','4px solid red');
            $("#result_content").text("Invalid Input!!Monthly income must be a number ");
            $("#result_content").css('color','red');
        }
        else{
            $(".calc_input").css('border', '2px solid #000000');
            $(".calc_input").css('border-radius', '8px');
            $("#result_content").css('color','black');
            if(monthy_repayment>threshold){
                $("#result_content").text("loan denied");
                $('#calc_form')[0].reset();
                $("#result_content").css('background-color','#ff0e0e');
            }
            else{
                $('#calc_form')[0].reset();
                $("#result_content").text("loan approved monthly"+ monthy_repayment.toFixed(2) +".");
                $("#result_content").css('background-color','#00e431')
            }
        }
        
    });
});

