let allRecepieCards_html = ''; 

let simple_and_tasty = document.querySelectorAll(".simple_tasty_recipes");
let try_this_recepies_shortcut = document.querySelectorAll(".try_this_recepies_shortcut");

let simp_tasty = {
    img: "images/noodals.jpg",
    imgAlt: "noodals",
    recepieName: "Spicy noodles",
    backingTime: "30 minutes",
    backingType: "Chicken"
};

let recepieCards_html = 
    `<div class="simple_tasty_css popUp">
        <div class="image">
            <img src="${simp_tasty.img}" alt="${simp_tasty.imgAlt}">
        </div>
        <h3>${simp_tasty.recepieName}</h3>
        <div class="backingtime_type">
            <p><i class="fa-solid fa-stopwatch-20"></i> ${simp_tasty.backingTime}</p>
            <p><i class="fa-solid fa-utensils"></i> ${simp_tasty.backingType}</p>
        </div>
    </div>`;



for(let i = 0; i < 10; i++) {
    allRecepieCards_html += recepieCards_html; 
}
    
simple_and_tasty.forEach((container) => {
    container.innerHTML = allRecepieCards_html; 
});

try_this_recepies_shortcut.forEach((container) => {
    container.innerHTML = allRecepieCards_html; 
});
