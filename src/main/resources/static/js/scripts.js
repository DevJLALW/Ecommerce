document.addEventListener("DOMContentLoaded", function() {
    fetch("/api/products")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const productImg = document.createElement("img");
                productImg.src = product.imageUrl;
                productDiv.appendChild(productImg);

                const productName = document.createElement("h2");
                productName.textContent = product.name;
                productDiv.appendChild(productName);

                const productDescription = document.createElement("p");
                productDescription.textContent = product.description;
                productDiv.appendChild(productDescription);

                const productPrice = document.createElement("p");
                productPrice.textContent = `$${product.price}`;
                productDiv.appendChild(productPrice);

                const addButton = document.createElement("button");
                addButton.textContent = "Add to Cart";
                productDiv.appendChild(addButton);

                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
