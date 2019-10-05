function getAjaxCat() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (this.status == 200) {
            const res = JSON.parse(this.responseText);

            let product_container = document.getElementById("product__container");
            var list__length = res.list.length;
            for (let x = 0; x < list__length; x++) {
                if (category == res.list[x].category) {
                    let product = document.createElement("div");
                    product.setAttribute("id", "product" + x);
                    product.setAttribute("class", "product " + "product" + x);
                    product_container.appendChild(product);

                    let product_name = document.createElement("p");
                    product_name.setAttribute("id", "name" + x);
                    product_name.setAttribute("class", "name");
                    product.appendChild(product_name);
                    name = res.list[x].name;
                    document.getElementById("name" + x).innerHTML = name;

                    if (name.length > 40) {
                        let shortname = name.substring(0, 44) + '...';
                        document.getElementById("name" + x).innerHTML = shortname;
                    }

                    let price = document.createElement("p");
                    price.setAttribute("id", "price" + x);
                    price.setAttribute("class", "price");
                    product.appendChild(price);
                    price = res.list[x].price.gross.base;
                    document.getElementById("price" + x).innerHTML = price;

                    img = res.list[x].image;
                    product.style.backgroundImage = "url('" + img + "')";
                }
            }
        }
    }

    xhr.open('GET', 'shop.json', true);
    xhr.send();
}

// show category
var category;
var categories = document.querySelectorAll(".category");
for (let x = 1; x < categories.length; x++) {
    let pick = categories[x];
    pick.addEventListener("click", function() {
        category = pick.innerHTML;
        clear();
        getAjaxCat(category);
    })
}