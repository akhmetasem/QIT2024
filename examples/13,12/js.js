const button = document.querySelector('.button')
button.addEventListener('click',(e) =>{
    document.body.style.backgroundColor ='red';
})


const card = document.querySelector('.card')
card.addEventListener('mouseenter',() => {
    card.style.backgroundColor = 'white';
})
card.addEventListener('mouseleave',()=>{
card.style.backgroundColor ='green';
})