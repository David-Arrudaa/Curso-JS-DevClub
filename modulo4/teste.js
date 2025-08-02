// Adicionar 10% de valor de mercado a todas as empresas - MAP
// Filtrar somente companhias fundadas abaixo de 1990 - FILTER
// Somar o valor de mercado das restantes - REDUCE

const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hym Suk", foundedOn: 1938 },
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
    { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
]

const add10Percent = (company) => {
    company.marketValue += (company.marketValue / 10)
    return company
}
const filterCompanies = (company => company.foundedOn < 1990)
const calculateTotalMarketValue = (acc, company) => acc + company.marketValue

const marketValueOldCompanies = companies.map(add10Percent)
    .filter(filterCompanies)
    .reduce(calculateTotalMarketValue, 0)

console.log("Empresas abaixo de 1990:");
console.log(marketValueOldCompanies);

//-------------------------------------------------------------------------------
// Remover 10% de valor de mercado a todas as empresas - MAP
// Filtrar somente companhias fundadas acimao de 1990 - FILTER
// Somar o valor de mercado das restantes - REDUCE
console.log();


const remove10Percent = (company) => {
    company.marketValue -= (company.marketValue / 10)
    return company
}
const newFilterCompanies = (company => company.foundedOn > 1990)

const newMarketValueOldCompanies = companies.map(remove10Percent)
    .filter(newFilterCompanies)
    .reduce(calculateTotalMarketValue, 0)

console.log("Empresas acima de 1990");
console.log(newMarketValueOldCompanies);



