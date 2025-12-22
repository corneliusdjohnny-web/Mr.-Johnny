document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleGallery');
    const gallery = document.querySelector('.gallery');

    toggleButton.addEventListener('click', function() {
        if (gallery.style.display === 'none') {
            gallery.style.display = 'block';
            toggleButton.textContent = 'Hide Gallery';
        } else {
            gallery.style.display = 'none';
            toggleButton.textContent = 'Show Gallery';
        }
    });
});