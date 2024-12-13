/*const myButton = document.getElementById('myButton');
myButton.addEventListener('click',function(){
    alert('Жарайсың жаным');
    myButton.textContent = 'Hello world';
});*/
/*const myButton = document.getElementById('myButton');
myButton.addEventListener('click',function(){
    myButton.textContent = 'Hello world';
    myButton.style.fontFamily = 'cursive';
});
myButton.addEventListener("mouseenter", function(){
    myButton.style.fontWeight = 'bold';
});
myButton.addEventListener("mouseleave", function(){
    myButton.style.fontWeight = 'normal';
});

const test = document.querySelector('#test');
test.addEventListener('click', function(){
    test.style.fontSize = "50px";
});

test.addEventListener('dblclick', function(){
    test.style.fontSize = "20px";
    test.style.color = "purple";
});

const fred = document.getElementById('fred');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');*/

/*plus.addEventListener('click', function(){
    fred.style.fontSize = (size + 5) + "px"
})*/


const box = document.querySelector('#box');

box.addEventListener("mouseenter", function(){
    box.style.backgroundColor = 'lightblue';

});
box.addEventListener("mouseleave", function(){
    box.style.backgroundColor = 'white';


});

/*const items = document.querySelectorAll('.items');


for (item of items){
    item.addEventListener('click',() => {
    item.style.color = "red";
});
}*/


const sharshi = document.querySelector('#sharshi');
sharshi.addEventListener("mouseenter", function() {
    sharshi.style.backgroundColor = "yellow";
});

sharshi.addEventListener("mouseleave", function(){
    sharshi.style.backgroundColor = "rgb(7, 83, 24)"
});
