mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [26.1, 44.4],
    zoom: 10
});

// Prestatori de servicii
const prestatori = [
    { id: 1, lng: 26.1025, lat: 44.4268, tip: 'vulcanizare', nume: 'Vulcanizare Non-Stop' },
    { id: 2, lng: 26.085, lat: 44.435, tip: 'tractare', nume: 'Tractare Non-Stop' }
];

// Afișare marcaje
prestatori.forEach(prestator => {
    const marker = new mapboxgl.Marker()
        .setLngLat([prestator.lng, prestator.lat])
        .setPopup(new mapboxgl.Popup().setText(prestator.nume))
        .addTo(map);
});

// Căutare în prestatori
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const rezultate = prestatori.filter(prestator => prestator.nume.toLowerCase().includes(query));
    console.log('Rezultate căutare:', rezultate);
});
