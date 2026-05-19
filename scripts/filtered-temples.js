document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = 
  "Last Modified: " + document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004 , January, 11",
    area:17500 ,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, September, 27",
    area: 26683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona, United States",
    dedicated: "2014, November, 16",
    area: 64870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
  },
];


const gallerySection = document.querySelector(".gallery");

function displayTemples(array) { 
  gallerySection.innerHTML= "";

  array.forEach(temple => { 
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML =`
  <h3>${temple.templeName}</h3>
  <p>Location: ${temple.location} </p>
  <p>Dedicated: ${temple.dedicated} </p>
  <p>Size: ${temple.area} sq ft</p>
  <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}" width="300" height="500">
  `;
  
  gallerySection.appendChild(div)
 });

}

displayTemples(temples);

const allTemple = document.querySelector(".all-temple");
const oldTemple = document.querySelector(".old");
const newTemple = document.querySelector(".new");
const largeTemple = document.querySelector(".larger");
const smallTemple = document.querySelector(".smaller");

oldTemple.addEventListener("click", function(){
  const filtered = temples.filter(temple => parseInt(temple.dedicated) < 1900 )
  displayTemples(filtered)
})

newTemple.addEventListener("click", function(){
  const filtered = temples.filter(temple => parseInt(temple.dedicated) > 2000)
  displayTemples(filtered)
})

largeTemple.addEventListener("click", function(){
  const filtered = temples.filter(temple=> temple.area > 90000)
  displayTemples(filtered)
})

smallTemple.addEventListener("click", function(){
  const filtered = temples.filter(temple=> temple.area < 10000)
  displayTemples(filtered)
})

allTemple.addEventListener("click", function(){
  displayTemples(temples);
})