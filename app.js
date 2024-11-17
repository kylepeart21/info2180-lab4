
function loadAllSuperheroes() {
    fetch('superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching superheroes:', error);
            document.getElementById('output').innerHTML = '<p>Failed to load superhero data.</p>';
        });
}

document.getElementById('searchButton').addEventListener('click', function() {
    const query = encodeURIComponent(document.getElementById('searchInput').value.trim());
    document.getElementById('output').innerHTML = '';
    fetch(`superheroes.php?query=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching superhero:', error);
            document.getElementById('output').innerHTML = '<p>Failed to load superhero data.</p>';
        });
});
window.onload = loadAllSuperheroes;