document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const contentFrame = document.getElementById('content-frame');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            fetch(href)
                .then(response => response.text())
                .then(html => {
                    contentFrame.contentDocument.write(html);
                    contentFrame.contentDocument.close();
                })
                .catch(error => {
                    console.error('Error loading the page:', error);
                    contentFrame.contentDocument.write('<p>Error loading the page.</p>');
                    contentFrame.contentDocument.close();
                });
        });
    });
});
