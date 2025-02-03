document.getElementById('fetchButton').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;

    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('htmlContent').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching the HTML:', error);
            document.getElementById('htmlContent').innerHTML = `<p style="color: red;">Error fetching the HTML. Please check the console for more details.</p>`;
        });
});
