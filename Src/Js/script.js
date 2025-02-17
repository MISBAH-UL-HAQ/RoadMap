// document.addEventListener('DOMContentLoaded', () => {
//     // Toggle mobile menu
//     const navToggle = document.querySelector('.nav-toggle');
//     const navList = document.querySelector('.nav-list');
    
//     navToggle.addEventListener('click', () => {
//         navList.classList.toggle('active');
//     });

//     // Content loader
//     const contentArea = document.getElementById('content');
//     const menuItems = document.querySelectorAll('.menu-item');
    
//     async function loadContent(url) {
//         try {
//             const response = await fetch(url);
//             const html = await response.text();
//             contentArea.innerHTML = html;
//         } catch (error) {
//             contentArea.innerHTML = `
//                 <div class="error-message">
//                     <h3>Content could not be loaded</h3>
//                     <p>Please try again later</p>
//                 </div>
//             `;
//         }
//     }

//     // Progress tracking system
//     let userProgress = JSON.parse(localStorage.getItem('progress')) || {};

//     function updateProgress(section, itemId) {
//         if (!userProgress[section]) userProgress[section] = {};
//         userProgress[section][itemId] = true;
//         localStorage.setItem('progress', JSON.stringify(userProgress));
//     }

//     function attachProgressHandlers() {
//         document.querySelectorAll('.checklist-item input').forEach(item => {
//             const section = document.querySelector('h2').textContent;
//             item.checked = userProgress[section]?.[item.id] || false;
            
//             item.addEventListener('change', (e) => {
//                 updateProgress(section, e.target.id);
//             });
//         });
//     }

//     // Handle menu item clicks
//     menuItems.forEach(item => {
//         item.addEventListener('click', (e) => {
//             e.preventDefault();
//             const contentUrl = item.getAttribute('data-content');
//             loadContent(`html/getting_started/${contentUrl}.html`);
//         });
//     });


//     // Load initial content if URL has hash
//     if (window.location.hash) {
//         const initialContent = window.location.hash.substring(1);
//         loadContent(`${initialContent}/index.html`);
//     }
// });















document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Content loader
    const contentArea = document.getElementById('content');
    
    async function loadContent(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            contentArea.innerHTML = html;
        } catch (error) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <h3>Content could not be loaded</h3>
                    <p>Please try again later</p>
                </div>
            `;
        }
    }

    // Handle all clicks in the document
    document.addEventListener('click', (e) => {
        // Handle sidebar menu items
        if (e.target.closest('.menu-item')) {
            e.preventDefault();
            const contentUrl = e.target.closest('.menu-item').getAttribute('data-content');
            loadContent(`../html/${contentUrl}.html`);
        }
        
        // Handle card links
        if (e.target.closest('.card-link')) {
            e.preventDefault();
            const contentUrl = e.target.closest('.card-link').getAttribute('data-content');
            loadContent(`../html/${contentUrl}.html`);
        }
    });

    // Load initial content
    if (window.location.hash) {
        const initialContent = window.location.hash.substring(1);
        loadContent(`../html/${initialContent}/index.html`);
    } else {
        // Load Getting Started by default
        loadContent(`${initialContent}/index.html`);
    }
});






// document.addEventListener('DOMContentLoaded', () => {
//     // Toggle mobile menu
//     const navToggle = document.querySelector('.nav-toggle');
//     const navList = document.querySelector('.nav-list');
    
//     navToggle.addEventListener('click', () => {
//         navList.classList.toggle('active');
//     });

//     // Content loader
//     const contentArea = document.getElementById('content');
    
//     async function loadContent(url) {
//         try {
//             const response = await fetch(url);
//             const html = await response.text();
//             contentArea.innerHTML = html;
//         } catch (error) {
//             contentArea.innerHTML = `
//                 <div class="error-message">
//                     <h3>Content could not be loaded</h3>
//                     <p>Please try again later</p>
//                 </div>
//             `;
//         }
//     }

//     // Handle all clicks in the document
//     document.addEventListener('click', (e) => {
//         // Handle sidebar menu items
//         if (e.target.closest('.menu-item')) {
//             e.preventDefault();
//             const contentUrl = e.target.closest('.menu-item').getAttribute('data-content');
//             loadContent(`../html/${contentUrl}.html`);
//         }
        
//         // Handle card links
//         if (e.target.closest('.card-link')) {
//             e.preventDefault();
//             const contentUrl = e.target.closest('.card-link').getAttribute('data-content');
//             loadContent(`../html/${contentUrl}.html`);
//         }
//     });

//     // Load initial content
//     if (window.location.hash) {
//         const initialContent = window.location.hash.substring(1);
//         loadContent(`../html/${initialContent}/index.html`);
//     } else {
//         // Load Getting Started by default
//         loadContent('../html/getting_started/index.html');
//     }
// });



