const filterElement = document.querySelector("input");
const cards = document.querySelectorAll("div.card")

filterElement.addEventListener("input",filterCards);

function filterCards(){
    if(filterElement === ""){
        for (let card of cards) {
            card.style.display = "block";   
        }
           
    } else{
        for (let card of cards) {
            let title = card.querySelector("p");
            title = title.textContent.toLowerCase();
            let filterText = filterElement.value.toLowerCase();
            if(title.includes(filterText)){
                card.style.display = "block" }else{
                    card.style.display = "none" ;
                      
            }
        }  
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 992){
        document.getElementById('menu-fechado').style.width = "100vw"
    }else{
        document.getElementById('menu-fechado').style.width = "0vw"

    }
}

function fecharMenu(){
    document.getElementById('menu-fechado').style.width = "0vw"
    
}
function abrirMenu(){
    document.getElementById('menu-fechado').style.width = "100vw"

}
                    