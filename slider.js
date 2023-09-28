let accordions_header = document.querySelectorAll(".accordion_header")
accordions_header.forEach(accordion_toggler => {
    accordion_toggler.addEventListener("click",function(){
        let arrow = accordion_toggler.getElementsByTagName("i")
        $(".fa-solid").attr("class", "fa fa-solid fa-chevron-down")
        $(".accordion_body").css("display", "none")
        $(".accordion_header").css("backgroundColor", "unset")
        $(accordion_toggler).css("backgroundColor", "rgb(6, 238, 255)")
        $(accordion_toggler).next().css("display", "block")
        arrow[0].setAttribute("class", "fa fa-solid fa-chevron-up")
    })
})
$(".accordion_body").click(()=>{
    $(".fa-solid").attr("class", "fa fa-solid fa-chevron-down")
    $(".accordion_body").css("display", "none")
    $(".accordion_header").css("backgroundColor", "unset")
})

