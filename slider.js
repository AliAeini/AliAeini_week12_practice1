const accordion_items = document.querySelectorAll(".accordion_item")

accordion_items.forEach((item)=>{
    const accordion_header = item.querySelector(".accordion_header")
    accordion_header.onclick = ()=>{
        item.querySelector(".accordion_body").classList.toggle("d_block")
        accordion_header.querySelector(".fa-solid").classList.toggle("arrow_rotate")
        accordion_header.classList.toggle("bg_aqua")
    }
})