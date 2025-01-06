// Configurare Mapbox
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [26.1, 44.4],
    zoom: 10
});

// Marcaje pe hartă
const prestatori = [
    { lng: 26.1025, lat: 44.4268, nume: 'Vulcanizare Non-Stop', tip: 'vulcanizare' },
    { lng: 26.085, lat: 44.435, nume: 'Tractare Rapidă București', tip: 'tractare' }
];

prestatori.forEach(prestator => {
    new mapboxgl.Marker()
        .setLngLat([prestator.lng, prestator.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${prestator.nume}</h3><p>${prestator.tip}</p>`))
        .addTo(map);
});
