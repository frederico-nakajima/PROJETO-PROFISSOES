
const filterElement = document.querySelector("input.prof");
const cards = document.querySelectorAll("div.card")

filterElement.addEventListener("input",filterCards);

function filterCards(){
    if(filterElement.value === ""){
        for (let card of cards) {
            card.style.display = "block";   
        }
           
    } else{
        for (let card of cards) {
            let title = card.querySelector("p.title");
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
    // document.getElementById('menu-fechado').style.transition = "0.3s"
    
}
function abrirMenu(){
    document.getElementById('menu-fechado').style.width = "100vw"
    // document.getElementById('menu-fechado').style.transition = "0.3s"

}

var i = 0
var vel = 80
var txt = 'Selecione uma Funcionária'

function digitacaoH1(){

if(i<txt.length){
    document.getElementById('h1').innerHTML += txt.charAt(i)
    i++
    setTimeout(digitacaoH1,vel)
}
}


                    