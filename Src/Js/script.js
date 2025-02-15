// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    navToggle.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
    });

    // Roadmap Navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const contentArea = document.getElementById('content');

    // Load content function
    async function loadContent(contentType) {
        try {
            const response = await fetch(`/data/${contentType}.html`);
            const html = await response.text();
            contentArea.innerHTML = html;
        } catch (error) {
            contentArea.innerHTML = `<div class="error">Content not available</div>`;
        }
    }

    // Add click handlers
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const contentType = item.dataset.content;
            loadContent(contentType);
        });
    });

    // Progress Tracking
    let userProgress = JSON.parse(localStorage.getItem('progress')) || {};

    function updateProgress(section) {
        userProgress[section] = true;
        localStorage.setItem('progress', JSON.stringify(userProgress));
    }
});