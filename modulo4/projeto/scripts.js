const list = document.querySelector("ul")
const buttonForEach = document.querySelector("#for-each")
const buttomMap = document.querySelector("#mapear")
const buttomReduce = document.querySelector("#somar")
const buttonFilter = document.querySelector("#filtrar")

function formatCurrency(value) {
    return newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

function showAll(productsArray) {
    let myLi = ""
    productsArray.forEach(product => {
        myLi += `
                    <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                         <p class="item-price"> ${formatCurrency(product.price)}</p>
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
                <p>O valor toal dos itens é: ${formatCurrency(totalValue)}</p>
            </li>
    
        `
}

function filter() {
    const filterItems = menuOptions.filter((items) => items.vegan)
    showAll(filterItems)
}

buttonForEach.addEventListener("click", () => showAll(menuOptions))
buttomMap.addEventListener("click", mapAllItems)
buttomReduce.addEventListener("click", sumAllItens)
buttonFilter.addEventListener("click", filter)




