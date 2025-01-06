// Configurare Mapbox
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Înlocuiește cu token-ul tău
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [26.1, 44.4], // Coordonate inițiale (București)
    zoom: 10
});

// Prestatori de servicii - date simulare
const prestatori = [
    { id: 1, lng: 26.1025, lat: 44.4268, tip: 'vulcanizare', nume: 'Vulcanizare Non-Stop' },
    { id: 2, lng: 26.085, lat: 44.435, tip: 'tractare', nume: 'Tractare Rapidă București' },
    { id: 3, lng: 26.07, lat: 44.45, tip: 'diagnoză', nume: 'Diagnoză la Domiciliu' }
];

// Afișare marcaje pe hartă
function afiseazaMarcaje(prestatoriFiltrati) {
    map.eachLayer(layer => {
        if (layer.type === 'symbol' && layer.id !== 'composite') {
            map.removeLayer(layer.id);
            map.removeSource(layer.id);
        }
    });

    prestatoriFiltrati.forEach(prestator => {
        new mapboxgl.Marker()
            .setLngLat([prestator.lng, prestator.lat])
            .setPopup(new mapboxgl.Popup().setText(prestator.nume))
            .addTo(map);
    });
}

// Afișare inițială a prestatorilor
afiseazaMarcaje(prestatori);

// Bara de căutare
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const prestatoriFiltrati = prestatori.filter(prestator =>
        prestator.nume.toLowerCase().includes(query) || prestator.tip.toLowerCase().includes(query)
    );
    afiseazaMarcaje(prestatoriFiltrati);
});

// Navigare între secțiuni
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
