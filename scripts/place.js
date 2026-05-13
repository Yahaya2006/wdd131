// ===== FOOTER DYNAMIQUE =====
document.getElementById('currentYear').textContent = 
  new Date().getFullYear();

document.getElementById('lastModified').textContent = 
  document.lastModified;

// ===== WIND CHILL =====
const temperature = 10;  
const windSpeed = 5;     

// Formule Wind Chill en Celsius
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp 
    - 11.37 * Math.pow(speed, 0.16) 
    + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}


if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById('wind-chill').textContent = 
    calculateWindChill(temperature, windSpeed) + ' °C';
} else {
  document.getElementById('wind-chill').textContent = 'N/A';
}