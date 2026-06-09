// Display the total number of reviews completed from localStorage
const reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
const counterEl = document.getElementById('counter');
if (counterEl) {
    counterEl.textContent = `Total reviews submitted: ${reviewCount}`;
}

// Update current year
const currentYear = new Date().getFullYear();
const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) currentYearEl.textContent = currentYear;
