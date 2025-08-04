const list = document.querySelector("ul")
const buttonForEach = document.querySelector("#for-each")
const buttomMap = document.querySelector("#mapear")
const buttomReduce = document.querySelector("#somar")

function showAll(productsArray) {
    let myLi = ""
    productsArray.forEach(product => {
        myLi += `
                    <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                         <p class="item-price">R$ ${product.price.toFixed(2)}</p>
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

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
     list.innerHTML =
        `
            <li>
                <p>O valor toal dos itens é: R$ ${totalValue}</p>
            </li>
    
        `
     
}

buttonForEach.addEventListener("click", () => showAll(menuOptions))
buttomMap.addEventListener("click", mapAllItems)
buttomReduce.addEventListener("click", sumAllItens)





