let body = document.querySelector("body");
const URL = `https://fakestoreapi.com/products`;
let inventoryBox = document.querySelector("#int-box");
let goBack = document.querySelector("#go-back");
let inventory = document.querySelector("#inventory");

window.addEventListener("load", () => {
    products();
});

const products = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        data.forEach((element) => {
            createElement(element);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    
};

function createElement(element) {
    console.log(element);
    let imgsrc = element.image;
    let cat = element.category;
    let Title = element.title;
    let Price = element.price;
    let Rating = element.rating.rate;
    let box = document.createElement("div");
    box.className = 'box';
    let img = document.createElement("img");
    img.src = imgsrc;
    img.style.backgroundSize = "cover";
    box.appendChild(img);
    let category = document.createElement("p");
    category.className = "category";
    category.innerText = cat;
    box.appendChild(category);
    let title = document.createElement("p");
    title.className = "Title";
    title.innerText = Title;
    box.appendChild(title);
    let price = document.createElement("p");
    price.className = "price";
    price.innerText = Price;
    box.appendChild(price);
    let rating = document.createElement("p");
    rating.className = "rating";
    rating.innerText = Rating;
    box.appendChild(rating);
    let cartButton = document.createElement("button");
    cartButton.className = "add-cart";
    cartButton.innerText = "Add To Cart";
    box.appendChild(cartButton);
    body.appendChild(box);
    inventoryBox.style.display="none";
    cartButton.addEventListener( "click" , () => {
        inventoryBox.style.display="block";
        inventory.style.transform="translateX(-97%)";
        boxEle = cartButton.parentElement.cloneNode(true);
        console.log(cartButton.parentElement);
        img = boxEle.querySelector("img");
        cat = boxEle.querySelector(".category");
        tle = boxEle.querySelector(".Title");
        pri = boxEle.querySelector(".price");
        rat = boxEle.querySelector(".rating");
        ele = document.createElement("div");
        ele.className="element";
        inventory.append(ele);
        ele.appendChild(img);
        console.log(img);
    })
    goBack.addEventListener( "click" , () => {
        inventoryBox.style.display="none";
    })
}
