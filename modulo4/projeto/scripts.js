const list = document.querySelector("ul")
const buttonForEach = document.querySelector("#for-each")
const buttomMap = document.querySelector("#mapear")

function showAll(productsArray) {
    let myLi = ""
    productsArray.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                 <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, // Spread Operator
            price: product.price * 0.9,  
    }))

    showAll(newPrices)

}

buttonForEach.addEventListener("click", () => showAll(menuOptions))
buttomMap.addEventListener("click", mapAllItems)





