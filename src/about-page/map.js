const map = L.map('map').setView([13.845, 100.569], 15); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([13.845, 100.569]).addTo(map)
    .bindPopup('<b>Kasetsart University</b><br>Faculty of Computer Engineering')
    .openPopup();