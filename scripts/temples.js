const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;
document.getElementById('lastModified').innerHTML = document.lastModified

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});