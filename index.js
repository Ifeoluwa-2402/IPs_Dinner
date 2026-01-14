import  { menuArray } from './data.js';

menuArray.forEach(function(items) {
    console.log(items.ingredients)
    document.getElementById('main').innerHTML += `
    <div class="item">
        <div class="item-container">
            <h2 class="item-emoji">${items.emoji}</h2>
            <div class="item-details">
                <h3 class="item-name">${items.name}</h3>
                <p class="item-ingredients">${items.ingredients}</p>
                <h4 class="item-price">$${items.price}</h4>
            </div>
        </div>
        <button>
            <i class="fa-solid fa-plus"></i>
        </button>
    </div>`
});