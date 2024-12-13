const fruitSelect = document.getElementById('fruitSelect');
const selectedfruit = document.getElementById('selectedfruit');

fruitSelect.addEventListener('change', () => {
    selectedfruit.textContent = fruitSelect.value;
})