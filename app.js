document.getElementById('searchButton').addEventListener('click', function() {
    fetch('superheroes.php') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); 
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const superheroes = Array.from(doc.querySelectorAll('li')).map(li => li.textContent);
            alert('Superheroes:\n' + superheroes.join('\n'));
        })
        .catch(error => {
            console.error('Error fetching superheroes:', error);
            alert('Failed to load superheroes.');
        });
});
