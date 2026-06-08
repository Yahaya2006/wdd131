const currentYear = new Date().getFullYear();
const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) currentYearEl.textContent = currentYear;

const lastModifiedEl = document.getElementById('lastModified');
if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const select = document.querySelector('#productName');
if (select) {
  products.forEach(product => {
    let option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);
const counterEl = document.getElementById('counter');
if (counterEl) counterEl.textContent = `Total reviews submitted: ${reviewCount}`;

