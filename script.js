// $(document).ready(function(){
//     $(".navLink").on("click", function (event) {
//         event.preventDefault(); // Stops the default link behavior
//         console.log("A nav link was clicked! This is: " + $(this).text());
//         $(".navLink").removeClass("active");
//         $(this).addClass("active");
//     });
// });

function activeTab(){
    var tabLink= document.getElementsByClassName("navLink");
    tabLink.style.backgroundColor = "yellow";
}