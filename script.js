let product = document.querySelector("#product");

let watchData = [
  {
    id: 1,
    img: "./Images/1.png",
    brand: "EDIFICE",
    model: "ECB-2000DC-1B",
    price: "₹ 19,995 (incl. of all taxes)",
  },
  {
    id: 2,
    img: "./Images/2.png",
    brand: "EDIFICE",
    model: "ECB-2000NP-1A",
    price: "₹ 23,995 (incl. of all taxes)",
  },
  {
    id: 3,
    img: "./Images/3.png",
    brand: "EDIFICE",
    model: "ECB-40NP-1A",
    price: "₹ 16,995 (incl. of all taxes)",
  },
  {
    id: 4,
    img: "./Images/4.png",
    brand: "EDIFICE",
    model: "ECB-2200HTR-1A",
    price: "₹ 39,995 (incl. of all taxes)",
  },
  {
    id: 5,
    img: "./Images/5.png",
    brand: "EDIFICE",
    model: "EFR-S108D-2AV",
    price: "₹ 12,495 (incl. of all taxes)",
  },
  {
    id: 6,
    img: "./Images/6.png",
    brand: "EDIFICE",
    model: "EFR-S108D-2BV",
    price: "₹ 12,495 (incl. of all taxes)",
  },
  {
    id: 7,
    img: "./Images/7.png",
    brand: "EDIFICE",
    model: "EFR-S108D-3AV",
    price: "₹ 12,495 (incl. of all taxes)",
  },
  {
    id: 8,
    img: "./Images/8.png",
    brand: "EDIFICE",
    model: "ECB-30DB-1A",
    price: "₹ 15,495 (incl. of all taxes)",
  },
  {
    id: 9,
    img: "./Images/9.png",
    brand: "EDIFICE",
    model: "ECB-30DC-1B",
    price: "₹ 15,995 (incl. of all taxes)",
  },
  {
    id: 10,
    img: "./Images/10.png",
    brand: "EDIFICE",
    model: "EFV-C110D-2B",
    price: "₹ 9,995 (incl. of all taxes)",
  },
  {
    id: 11,
    img: "./Images/11.png",
    brand: "EDIFICE",
    model: "EFV-C110D-5A",
    price: "₹ 9,995 (incl. of all taxes)",
  },
  {
    id: 12,
    img: "./Images/12.png",
    brand: "EDIFICE",
    model: "EFV-C110DC-1A",
    price: "₹ 11,995 (incl. of all taxes)",
  },
  {
    id: 13,
    img: "./Images/13.png",
    brand: "EDIFICE",
    model: "EFV-650D-1AV",
    price: "₹ 9,995 (incl. of all taxes)",
  },
  {
    id: 14,
    img: "./Images/14.png",
    brand: "EDIFICE",
    model: "EFV-650D-2AV",
    price: "₹ 9,995 (incl. of all taxes)",
  },
  {
    id: 15,
    img: "./Images/15.png",
    brand: "EDIFICE",
    model: "EFV-650D-3AV",
    price: "₹ 9,995 (incl. of all taxes)",
  },
  {
    id: 16,
    img: "./Images/16.png",
    brand: "EDIFICE",
    model: "EFR-574D-1AV",
    price: "₹ 11,995 (incl. of all taxes)",
  },
  {
    id: 17,
    img: "./Images/17.png",
    brand: "EDIFICE",
    model: "EFR-574D-2AV",
    price: "₹ 11,995 (incl. of all taxes)",
  },
  {
    id: 18,
    img: "./Images/18.png",
    brand: "EDIFICE",
    model: "EFR-574DB-3AV",
    price: "₹ 12,495 (incl. of all taxes)",
  },
  {
    id: 19,
    img: "./Images/19.png",
    brand: "EDIFICE",
    model: "ECB-40MU-1A",
    price: "₹ 29,995 (incl. of all taxes)",
  },
  {
    id: 20,
    img: "./Images/20.png",
    brand: "EDIFICE",
    model: "ECB-2200DC-1A",
    price: "₹ 21,995 (incl. of all taxes)",
  },
  {
    id: 21,
    img: "./Images/21.png",
    brand: "EDIFICE",
    model: "ECB-2200DD-1A",
    price: "₹ 19,995 (incl. of all taxes)",
  },
];

let shop = () => {
  return (product.innerHTML = watchData
    .map((x) => {
      return `<div class="item">
    <img width="250px" src=${x.img} />
    <div class="details">
      <h5>${x.brand}</h5>
      <h3>${x.model}</h3>
      <p>${x.price}</p>
    </div>
  </div>`;
    })
    .join(""));
};

shop();
