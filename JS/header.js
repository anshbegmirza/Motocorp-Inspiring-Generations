// script.js
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const nav = document.querySelector('.header-nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.add('active');
        menuIcon.style.display = 'none'; // Hide menu icon
        closeIcon.style.display = 'block'; // Show close icon
    });

    closeIcon.addEventListener('click', () => {
        nav.classList.remove('active');
        closeIcon.style.display = 'none'; // Hide close icon
        menuIcon.style.display = 'block'; // Show menu icon
    });
});
