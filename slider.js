let accordion_item = document.querySelectorAll(".accordion_item")

accordion_item.forEach((item)=>{
    let item_header = item.querySelector(".accordion_header")
    item_header.addEventListener("click",()=>{
        let accordion_body = item.querySelector(".accordion_body")
        let arrow = item_header.querySelector(".fa-solid")
        if(accordion_body.style.display == "none"){
            arrow.setAttribute("class", "fa fa-solid fa-chevron-up")
            accordion_body.style.display = "block"
        }else{
            accordion_body.style.display = "none"
            arrow.setAttribute("class", "fa fa-solid fa-chevron-down")
        }
        accordion_body.addEventListener("click",()=>{
            accordion_body.style.display = "none"
            arrow.setAttribute("class", "fa fa-solid fa-chevron-down")
        })
    })
})


