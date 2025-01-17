const freelancerTable = document.querySelector(".freelance-table-body");
const avgPriceElement = document.querySelector(".avg-price");
let totalPrice = 0;
let priceNumber = 0;

const initialFreelancerArray = [
  { name: "Mr. Cheese", occupation: "Cheesemaker", price: 37 },
  {
    name: "Admiral Procksteiner",
    occupation: "Watch Tech",
    price: 93,
  },
  {
    name: "Teddy McTedderson",
    occupation: "Teddy Bear Mechanic",
    price: 24,
  },
];

function addToFreelancerList(name, occupation, price) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td><td>${occupation}</td><td>$${price}.00 /hr</td>`;
  freelancerTable.appendChild(newRow);
  //update the price average and display it
  totalPrice += price;
  priceNumber += 1;
  avgPriceElement.innerHTML = `$${Math.floor(totalPrice / priceNumber)}.00`;
}

//Initialize the list
initialFreelancerArray.forEach((item) =>
  addToFreelancerList(item.name, item.occupation, item.price)
);

const randomNames = [
  "Daniel",
    "Julio",
    "Maria",
    "Cristina",
    "John",
    "Juliet",
    "Marco",
    "Joseph",
    "Deborah",
    "Helmut"
];

const randomOccupations = [
  "Handyman",
  "Eletrician",
  "Plumber",
  "Math Teacher",
  "English Teacher",
  "Siger",
  "Web Developer",
  "Musician",
  "Translator",
];

function generateNewFreelancer() {
  const newFreelancer = {
    name: `${
      randomNames[Math.floor(Math.random() * randomNames.length)]
    }`,
    occupation: `${
      randomOccupations[Math.floor(Math.random() * randomOccupations.length)]
    }`,
    price: Math.floor(Math.random() * 100),
  };
  addToFreelancerList(
    newFreelancer.name,
    newFreelancer.occupation,
    newFreelancer.price
  );
}

setInterval(generateNewFreelancer, 2000);