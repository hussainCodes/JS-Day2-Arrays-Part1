let groceries = ["apple", "banana", "tommato", "pineapple", "passionfruit", "cherry"];
console.log(groceries[1]);
console.log(groceries.length);
console.log(groceries[groceries.length - 1]);
let lastFruit = groceries.pop();
console.log(lastFruit);
groceries.push("rasberry", "Avocado");

let firstThreeItems = groceries.slice(0,3);

console.log(groceries);
function deleteElement(position, list){
   let firstPart = list.slice(0, position);
   let secondPart = list.slice(position, list.length);
   firstPart.pop();
   groceries = firstPart.concat(secondPart);
}

deleteElement(3, groceries);
console.log(groceries);

groceries.unshift("Strawberry")
console.log(groceries);
groceries.shift();
groceries.shift();
groceries.unshift("ketchaup", "chilli");
console.log(groceries);
