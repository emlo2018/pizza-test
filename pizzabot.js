const x = 'Vegetarian Pizza'
const y = 'Hawaiian Pizza'
const z = 'Pepperoni Pizza'

const pizzaPrice = 80

let orderName
let orderQuantity
//Put your Javscript code here:


const greeting = () => {
  alert(`Hey! Happy to serve your pizza. On our menu we have ${x}, ${y} and ${z}`)
  checkOrderName()
}

const checkOrderName = () => {
  let orderName = prompt(`Enter the name of the pizza you want to order today`)

  if (orderName === "Vegetarian Pizza" || orderName === "Hawaiian Pizza" || orderName === "Pepperoni Pizza") {

    let orderQuantity = Number(prompt(`Enter the number of ${orderName} you want to order today`))
    let sum = orderQuantity * pizzaPrice

    if (orderQuantity >= 1 && orderQuantity <= 2) {
      document.getElementById("order").innerHTML = `You ordered ${orderQuantity}  ${orderName} , this will take 10 minutes and it will cost ${sum}`
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
      document.getElementById("order").innerHTML = `You ordered ${orderQuantity}  ${orderName} , this will take 15 minutes and it will cost ${sum}`
    } else {
      document.getElementById("order").innerHTML = `You ordered ${orderQuantity}  ${orderName} , this will take 20 minutes and it will cost ${sum}`
    }
  } else {
    document.getElementById("order").innerHTML = "Sorry, that pizza is not on the menu";

  }

}

document.getElementById('pizzabot').onclick = function () {
  greeting();
}









