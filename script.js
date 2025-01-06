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
function afiseazaMarcaje(prestatoriFiltrati) {
    map.eachLayer(layer => {
        if (layer.id.startsWith('prestator-')) {
            map.removeLayer(layer.id);
            map.removeSource(layer.id);
        }
    });

    prestatoriFiltrati.forEach(prestator => {
        const marker = new mapboxgl.Marker({ color: '#ff5733' })
            .setLngLat([prestator.lng, prestator.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`
                <h3>${prestator.nume}</h3>
                <p>Tip: ${prestator.tip}</p>
            `))
            .addTo(map);
    });
}

// Afișare inițială a prestatorilor
afiseazaMarcaje(prestatori);

// Bara de căutare - Filtrare prestatori
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const prestatoriFiltrati = prestatori.filter(prestator =>
        prestator.nume.toLowerCase().includes(query) || prestator.tip.toLowerCase().includes(query)
    );
    afiseazaMarcaje(prestatoriFiltrati);

    // Animație pentru căutare
    const searchSection = document.getElementById('search-bar-section');
    searchSection.style.transition = 'background-color 0.5s ease-in-out';
    searchSection.style.backgroundColor = '#28a745';
    setTimeout(() => {
        searchSection.style.backgroundColor = 'transparent';
    }, 1000);
});

// Navigare lină între secțiuni
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

// Animații pentru butoane CTA
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transition = 'transform 0.2s ease-in-out';
        button.style.transform = 'scale(1.1)';
        setTimeout(() => button.style.transform = 'scale(1)', 200);
    });
});
