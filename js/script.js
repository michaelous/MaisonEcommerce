let x = 0; // for loop
let showprod = 6; // show to 6 products max

function getAjax()  {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(this.status == 200){
      const res = JSON.parse(this.responseText);

        let product_container = document.getElementById("product__container");
        let list = global__list;

        if (typeof list !== 'undefined') {
          x = list;
          showprod= list + 6;
        }

        for(x ; x<showprod ; x++){
        let product = document.createElement("div");
        product.setAttribute("id","product"+x);
        product.setAttribute("class","product " + "product"+x);
        product_container.appendChild(product);

        let product_name = document.createElement("p");
        product_name.setAttribute("id","name"+x);
        product_name.setAttribute("class","name");
        product.appendChild(product_name);
        name = res.list[x].name;
        document.getElementById("name"+x).innerHTML = name;

        if(name.length > 40)
        {
            let shortname = name.substring(0, 44) + '...';
            document.getElementById("name"+x).innerHTML = shortname;
        }

        let price = document.createElement("p");
        price.setAttribute("id","price"+x);
        price.setAttribute("class","price");
        product.appendChild(price);
        price = res.list[x].price.gross.base;
        document.getElementById("price"+x).innerHTML = price;

        img = res.list[x].image;
        product.style.backgroundImage = "url('" + img + "')";
      }
    }
  }



  xhr.open('GET', 'shop.json', true);
  xhr.send();
}

getAjax();

// 1,2,3 LIST to SHOW products
var global__list;
let list__container = document.createElement("div");
list__container.setAttribute("class", "list__container");
let content__container = document.getElementById("content__container");
content__container.appendChild(list__container);

for(var k=1;k<=3;k++){
  let amount = document.createElement("p");
  amount.setAttribute("class", "list " + "list"+k);
  list__container.appendChild(amount);
  amount.innerHTML = k;
}

for(var k=1;k<=3;k++){
  let amount = document.querySelector(".list"+k);
  amount.addEventListener("click", function(){
   let list = amount.innerHTML;
   global__list = list *6 - 6;
   clear();
   getAjax(global__list);
  });
}
// 1,2,3 END

// show all products for both "Categories"
var categories = document.getElementsByClassName('all_products');
for (var i=0; i<categories.length; i++) {
    categories[i].onclick = function (){
      clear();
      global__list = 0;
      getAjax(global__list);
    }
}

// clear
function clear(){
  document.getElementById("product__container").innerHTML = "";
};
