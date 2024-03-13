let body = document.querySelector("body");
let inventory = document.querySelector("#inventory");
const URL = `https://fakestoreapi.com/products`;
window.addEventListener("load",() => {
    products();
})
const products = async () => {
    inventory.style.display = "none"
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    data.forEach((ele) => {
        createElement(ele);
    });
}

function createElement(element)
{
    console.log(element);
    console.log(element.image);
    let imgsrc=element.image;
    let cat = element.category;
    let Title = element.title;
    let Price = element.price;
    let Ratting = element.rating.rate;
    let box = document.createElement("div");
    body.append(box);
    box.className = 'box';
    let img = document.createElement("img");
    box.append(img);
    img.src=imgsrc;
    img.backgroundSize="cover";
    let category = document.createElement("p");
    category.className="category";
    category.innerText=cat;
    box.append(category);
    let title = document.createElement("p");
    title.className="Title";
    title.innerText=Title;
    box.append(title);
    let price = document.createElement("p");
    price.className="price";
    price.innerText=Price;
    box.append(price);
    let ratting = document.createElement("p");
    ratting.className="ratting";
    ratting.innerText=Ratting;
    box.append(ratting);
    let cartButton = document.createElement("botton");
    cartButton.className="add-cart";
    cartButton.innerText="Add To Cart";
    box.append(cartButton);
    cartButton.addEventListener("click" , () => {
        console.log(inventory);
        inventory.style.display="block";
    })
}