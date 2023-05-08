import menu from "./db.js"


// html elemanlarını alma
const menuContainer = document.querySelector("#menu-container");

// sayfa yüklendiği anda elemanları gösteren fonksiyonu çalıştır 
document.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => `
     <div id='card' class="d-flex gap-3 flex-column flex-md-row align-items-center">
          <img src="${item.img}"class="img-fluid shadow rounded"/>
          <div>
          <div class="d-flex justify-content-between my-2">
            <h5>${item.title}</h5>
            <p>$ ${item.price}</p>
          </div>
          <p class="lead">
            ${item.desc}
          </p>
          </div>
        </div>`
    );

    displayMenu = displayMenu.join('');

    menuContainer.innerHTML = displayMenu;
}



// filtreleme kısmı
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
    btn.addEventListener('click',searchCategory)
})

function searchCategory(e) {
    const category = e.target.dataset.id;
    const filteredItems = menu.filter((menuItem) => {
        if(menuItem.category===category) return menuItem
    })

    if (category === "all") {
        displayMenuItems(menu);
    } else {
        displayMenuItems(filteredItems);
    }
 }