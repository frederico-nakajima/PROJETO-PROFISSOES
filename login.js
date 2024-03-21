// background squares
const ulSquares = document.querySelector('ul.squares')

for(let i = 0; i < 11; i++){

    const li = document.createElement('li')

    const random = (min,max) => Math.random() * (max - min)+ min

    const size = Math.floor(random(10,120)) 

    const position = random(1,80) 
    const delay = random(5, 0.1)
    const duration = random(24,12)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `${size}px`

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.opacity = '0';



    ulSquares.appendChild(li)


}
