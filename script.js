// Configurare Mapbox
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Înlocuiește cu token-ul tău Mapbox
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [26.1, 44.4], // Coordonate inițiale (București)
    zoom: 10
});

// Prestatori de servicii - Date simulate
const prestatori = [
    { id: 1, lng: 26.1025, lat: 44.4268, tip: 'vulcanizare', nume: 'Vulcanizare Non-Stop' },
    { id: 2, lng: 26.085, lat: 44.435, tip: 'tractare', nume: 'Tractare Rapidă București' },
    { id: 3, lng: 26.07, lat: 44.45, tip: 'diagnoză', nume: 'Diagnoză la Domiciliu' }
];

// Afișare marcaje pe hartă
prestatori.forEach(prestator => {
    const marker = new mapboxgl.Marker({ color: '#007bff' })
        .setLngLat([prestator.lng, prestator.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${prestator.nume}</h3><p>Tip: ${prestator.tip}</p>`))
        .addTo(map);
});
