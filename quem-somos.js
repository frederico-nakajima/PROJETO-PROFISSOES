const faq = document.getElementById('faq')
const resposta = document.getElementById('resposta')
const expand_less = document.getElementById('expand_less')
const expand_more = document.getElementById('expand_more')

function feedBack(){
    if(resposta.style.display === 'none'){
    resposta.style.display = 'block'
    expand_less.style.display = 'none'
    expand_more.style.display = 'block'
}else{
      resposta.style.display = 'none'
    expand_less.style.display = 'block'
    expand_more.style.display = 'none'

}

}