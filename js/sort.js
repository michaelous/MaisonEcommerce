const filter = document.getElementById("sort__filter");
filter.addEventListener("click", function() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    if (min.length == 0 || max.length == 0) {
        document.location.reload(true);
    }

    const product = document.querySelectorAll(".product");
    const price = document.querySelectorAll(".price");
    for (let x = 0; x < price.length; x++) {

        let price_string = price[x].innerHTML;
        let dot_string = String(price_string.replace(/,/g, '.'));
        let price_number = Number(dot_string.replace(/[^0-9.-]+/g, ""));

        if (price_number < min || price_number > max) {
            product[x].style.display = 'none';
        }
    }

}, false);